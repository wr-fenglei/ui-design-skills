# 怎么让 GPT/AI 设计出更好看的网页和 App 界面

> 整理时间：2026-10-19（UTC+8）
> 素材来源：X 上公开帖子（@emilkowalski、@pbakaus、@shannholmberg、@CoreyGallon 等）+ 两个开源项目的 README。所有链接都在文末「来源」里。
> 注意：这些账号是公开搜索找到的，**不确定是否在你的关注列表里**。

---

## 0. 先说结论（TL;DR）

1. **AI 不是不会写 UI，是没有品味的"默认值"**。不给约束，它就回到训练数据里最常见的 SaaS 模板。
2. **把品味写成文件**：DESIGN.md（视觉规则）+ 技能（skills），在 AGENTS.md 里强制引用。
3. **先出图再写码**：用 GPT Image 出视觉稿 → 定稿 → 再让 Codex 实现。
4. **写完必须"看"**：截图对照视觉稿做设计评审 + 用极端数据去"弄坏"页面（break-ui）。
5. **给具体规则，不要只给禁令**：「不要 Inter」只会换成下一个同类字体。

这和你自己 10/17 的经验一致：
> "A beautiful component doesn't automatically make a beautiful page. We started with one glass card and built a small UI system with GPT Image and code. The key: expand gradually, test the whole, and understand what works before adding more."
> —— https://x.com/yu_qi_77/status/2111500188447810015 （case study：https://github.com/wr-fenglei/ui-design-skills/blob/main/examples/translucent-ui/case-study.md ）

以及你回复 @giadotai（"codex 为什么写代码很强但 UI 还是很丑"）时说的：
> "A page can pass functional checks and still have weak hierarchy. What helped us: pick a visual core, then review type, spacing and density as we expand."
> —— https://x.com/yu_qi_77/status/2111497228929888341

---

## 1. 为什么 AI 做的界面有"AI 味"

**根因**：模型都是在同一批 SaaS 模板上训练出来的，不加引导就会产出同一套"特征"。Impeccable 的 README 原话："Every model trained on the same SaaS templates. Skip the guidance and you get the same handful of tells on every project."

**常见反模式（AI 味清单）**——来自 Impeccable README 和 X 上多人的总结：

| 反模式 | 说明 |
|---|---|
| 全站 Inter / Roboto | 字体没有性格，也没有层级对比 |
| 紫→蓝渐变 | 最典型的"AI 生成"标志 |
| 卡片套卡片 | 层级混乱，边框和阴影叠在一起 |
| 彩色背景上的灰字 | 对比度不足，看着脏 |
| 每个标题上面放一个圆角方块图标 | 模板感极强 |
| 巨大的 hero 标题 + 三个玻璃拟态按钮 | "看起来不一样，感觉全一样" |
| emoji 当图标 | 廉价感 |
| 动画用错：入场用 `ease-in`、`scale(0)` 起步、用实线边框代替半透明阴影 | Emil Kowalski 在 skills 仓库里点名的典型错误 |

**一个反直觉的点**（@CoreyGallon 转述 @pbakaus）：只禁止 Inter 或 Roboto，并不会让模型更有创意，它只会换成同一类里的"次优字体"。所以"Claude 米色"取代紫色渐变，成了新的 AI 设计标志。
→ **结论：要给正向的、具体的规则，而不是黑名单。**（见第 5 节）

**另一个根因**：AI 一次只看一个组件，组件单独好看，拼成整页就失去层级。这就是你说的"漂亮的组件 ≠ 漂亮的页面"。

---

## 2. DESIGN.md 模板（可直接复制）

放在项目根目录。下面的数值是**起步默认值**，按你的品牌改。关键是**每一项都写死**，不留给模型自由发挥。

```markdown
# DESIGN.md

> 本文件是本项目所有 UI 的唯一视觉依据。任何新页面/组件必须遵守；
> 需要偏离时，先在 PR 描述里说明理由，并更新本文件。

## 0. 设计方向（一句话）
- 关键词：<例如：克制、编辑感、高信息密度、暖灰底 + 单一强调色>
- 参考：<1–3 个真实产品/页面，写清楚"喜欢它的哪一点">
- 视觉核心：<页面里最重要的那一个元素，例如"玻璃质感的主卡片"，其他元素都为它让路>
- 明确不要：紫蓝渐变、卡片套卡片、标题上方的图标方块、emoji 图标、彩底灰字

## 1. 字体 Typography
- 标题字体：<具体字体名>，字重 600
- 正文字体：<具体字体名>，字重 400
- 等宽字体：<具体字体名>（代码、数字表格）
- 中文回退：<例如 "PingFang SC", "Noto Sans SC">
- 字号刻度（px）：12 / 14 / 16 / 20 / 24 / 32 / 48
  - 正文 16，辅助文字 14，说明 12
  - 一个页面最多用 4 个字号
- 行高：正文 1.6，标题 1.2
- 字距：大标题 -0.02em，正文 0
- 正文最大行宽：65ch
- 全局：`text-wrap: pretty;`（避免孤字/孤行）；标题可用 `text-wrap: balance;`，个别需要孤行的地方单独覆盖

## 2. 色板 Palette
- 用 CSS 变量，禁止在组件里写死颜色值
- 中性色（10 阶）：--gray-50 … --gray-950
- 背景：--bg（页面）、--surface（卡片）、--surface-raised（浮层）
- 文字：--text（主）、--text-muted（次）、--text-subtle（弱），都必须在对应背景上满足 WCAG AA
- 强调色：只有 1 个 --accent，只用于主按钮、链接、焦点环、关键数据
- 语义色：--success / --warning / --danger，只用于状态，不做装饰
- 渐变：默认不用；需要时只用同色系、低对比度
- 暗色模式：同一套变量名，各自取值

## 3. 间距 Spacing（4px 基准）
- 刻度：4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96
- 组件内边距：12 或 16
- 相关元素之间：8；不相关的区块之间：48 或 64
- 规则：靠"间距"分组，而不是靠"边框"分组；区块间距必须明显大于区块内间距
- 只能用刻度里的值，不允许出现 13px、18px 这类"随手值"

## 4. 圆角 Radius
- --radius-sm: 6px（输入框、标签）
- --radius-md: 10px（按钮、卡片）
- --radius-lg: 16px（弹窗、大面板）
- --radius-full: 9999px（头像、胶囊）
- 嵌套规则：内层圆角 = 外层圆角 − 内边距（避免"套娃圆角"）

## 5. 层级 / 阴影 Elevation
- 只允许 4 级，用阴影 + 背景色区分，不叠加实线边框
  - 0：贴底，无阴影（页面内容）
  - 1：卡片，`0 1px 2px rgb(0 0 0 / 0.06)`
  - 2：下拉 / 气泡，`0 4px 12px rgb(0 0 0 / 0.08)`
  - 3：弹窗，`0 12px 32px rgb(0 0 0 / 0.12)`
- 分隔优先用半透明阴影或 1px 半透明线（`rgb(0 0 0 / 0.06)`），不用实色边框
- 禁止卡片套卡片；需要二级分组时用背景色差或间距

## 6. 动效 Motion
- 时长：微交互（hover、按下）100–150ms；入场/展开 150–250ms；大面板 / 页面过渡 250–350ms
- 元素越大、移动距离越远，时长越长
- 缓动：入场和展开用 ease-out（例如 `cubic-bezier(0.22, 1, 0.36, 1)`）；退场可以更短；**入场禁止 ease-in**
- 不从 `scale(0)` 开始，用 `scale(0.95–0.98)` + opacity
- 多个元素一起出现时要错开（stagger），每个间隔 30–50ms，总时长不超过 300ms
- 只动画 transform 和 opacity；不动画 box-shadow；blur 值保持很小
- 一天用上百次的操作（快捷键、命令面板开关）不加动画
- 必须支持 `prefers-reduced-motion`；hover 效果只在 `(hover: hover)` 设备上生效
- 遮罩和弹窗的时长保持一致

## 7. 状态 States（每个交互组件都必须有）
- default / hover / active(pressed) / focus-visible / disabled / loading
- focus-visible：2px --accent 焦点环，offset 2px，不能去掉
- 数据视图必须设计：加载中（骨架屏）、空状态（说明 + 下一步按钮）、错误（原因 + 重试）、只有一条数据、海量数据（分页/虚拟滚动）
- 表单：校验错误显示在字段下方，用 --danger + 文字说明，不能只靠颜色

## 8. 布局与响应式
- 断点：640 / 768 / 1024 / 1280
- 内容最大宽度：1200px（营销页），阅读类 720px
- 移动端：点击区域至少 44×44；不依赖 hover；处理安全区（safe area）；输入框字号至少 16px，避免 iOS 自动缩放

## 9. 组件库
- 优先使用：<例如 shadcn/ui、Radix、Sonner（toast）>
- 不要手写已有成熟库的组件（toast、dialog、combobox）

## 10. 验收
- 新页面必须附桌面和移动端截图
- 通过 break-ui 压力测试（见 AGENTS.md）
```

### 在 AGENTS.md 里引用

```markdown
## UI / 前端规则（必读）

- 任何涉及 UI 的任务，开始前必须先读 `DESIGN.md`，并严格遵守其中的 token 和规则。
- 已定稿的视觉稿放在 `design/mockups/`，实现时以它为准；需要偏离时先问我。
- 不要新建一套平行的颜色、间距或动效变量；只能扩展 DESIGN.md 里已有的 token。
- 完成 UI 改动后必须：
  1. 用浏览器打开页面，截取桌面（1440px）和移动端（390px）截图；
  2. 对照视觉稿和 DESIGN.md 自查：层级、间距、字号、对齐、换行；
  3. 跑一遍 break-ui：超长名字/标题、异常邮箱、单字名、超大数字、空列表、几百条数据、超长标签；
  4. 在回复里列出发现的问题和修复内容。
- 可用技能：<例如 emilkowalski/skills 的 animate、review-animations、break-ui、mobile-native；impeccable 的 critique、audit、polish>
```

> 进阶：Impeccable 的 `/impeccable init` 会生成 `PRODUCT.md`（受众、用途、约束、语气），`/impeccable document` 会根据现有代码生成根目录的 `DESIGN.md`。老项目可以先用它反推出一份 DESIGN.md，再手动收紧。

---

## 3. 工作流：先出视觉稿（GPT Image），再实现

来源：@shannholmberg 的长帖（他从 GPT Image 刚发布时就在用这个方法），以及他引用的 @Voxyz_ai 帖子："Use imagegen to reimagine this page, then implement it."

**步骤**

1. **给足上下文**：网站给谁看、要传达什么、希望访客做什么；附上文案、品牌规范（字体、颜色、素材）、现有页面截图、参考站，并说明喜欢每个参考的哪一点。让它先问清楚缺什么，再开始出图。
2. **明确要求"先出图、不写码"**：
   ```
   use imagegen to create a website mockup from this brief and the attached references.
   use the supplied copy, brand assets and product information.
   show the page layout, typography, imagery and calls to action,
   and wait for my feedback before writing code.
   ```
   还在探索阶段时，可以要几个不同方向，每个方向在布局或图片使用上有实质区别。
3. **一起改稿**：按"用户能不能看懂、会不会用"来审——主信息清楚吗？布局有没有把注意力引到目标动作上？字读得清吗？符合品牌吗？有没有通用、空洞的区块或编造的细节？反馈要具体（例如"标题周围留白加大""减少装饰元素""把产品示例往上移"），并要求保留已经认可的部分。
4. **把定稿转成构建计划**：拆出区块、可复用组件、所需素材；定义交互（导航、表单、按钮、加载和错误状态）；**补上移动端怎么适配**，因为桌面稿不会回答这个问题。把定稿图和决定保存进项目（例如 `design/mockups/`）。
5. **开工前挑好 UI 技能**（见第 6 节）。Shann 提到可以在 https://www.ui-skills.com/ 这类目录里找。
6. **按定稿实现**：
   ```
   build the approved mockup as a responsive page.
   preserve its layout, spacing, typography and visual hierarchy,
   use the approved copy and implement the interactions we agreed.
   flag anything that needs a design decision before changing it.
   ```
   标题、按钮、表单要做成真正可用的网页元素；插图等生成的图片单独存成素材。
7. **对照视觉稿检查**（下一节）。

**结合你自己的经验**：不要一步跳到整页。先定一个"视觉核心"（比如你那张玻璃卡片），验证没问题后再逐步扩展到整页，每扩一步都看整体效果。

---

## 4. 写完之后：截图设计评审 + break-ui 压力测试

### 4.1 截图对照评审
- 让 Codex 在浏览器里打开实现好的页面，截**桌面和移动端**两个尺寸。
- 和定稿视觉稿逐项对比：间距、字号、图片比例、对齐、文字换行；再测链接、表单、键盘导航（来自 Shann 的第 7 步）。
- 评审维度（参考 Impeccable 的命令分工）：
  - `critique`：层级、清晰度、情绪感受（UX 设计评审）
  - `audit`：无障碍、性能、响应式（技术质量）
  - `polish`：最后一轮，向设计系统对齐，检查能否上线
- 一次看完、批量修，不要每改一处就截一次图（Impeccable 技能里的原则："batch the checks"）。
- 定稿后把最终截图和可复用的设计规则存回项目，下一页直接复用。

### 4.2 break-ui：故意把 UI 弄坏
Emil Kowalski："One of my recent favorite AI use cases: asking it to try and break the stuff I built." 他把这件事做成了 `/break-ui` 技能。

测试数据清单：
- 超长名字、超长标题、超长标签（中英文都测）
- 单字名、空字符串
- 异常邮箱（很长、带 `+`、子域很多）
- 超大数字（1,234,567,890）、负数、0
- 空列表 / 空状态
- 一条数据 / 几百条数据
- 加载慢、请求失败
- 小屏（320px）、大屏（1920px+）、浏览器放大到 200%

可以直接这样提：
```
用 worst-case 数据测试刚做的页面：超长名字、异常邮箱、单字名、超大数字、
空列表、500 条数据、超长标签。截图记录每个坏掉的地方，然后逐个修复，
修复时遵守 DESIGN.md。
```

### 4.3 移动端"像 App"
Emil 的 `/mobile-native` 技能处理这类细节：触屏上禁用 hover、点击高亮闪烁、100vh bug、输入框导致页面缩放、点击延迟、安全区等。

---

## 5. 写具体规则，而不是只写禁令

| ❌ 只写禁令 | ✅ 写具体规则 |
|---|---|
| 不要用 Inter | 标题用 <字体 A> 600，正文用 <字体 B> 400，字号只用 12/14/16/20/24/32/48 |
| 不要紫色渐变 | 背景用 --bg 暖灰，唯一强调色 --accent，只用于主按钮和链接 |
| 别太花哨 | 每屏只有一个视觉核心；区块间距 64，区块内 16 |
| 动画要自然 | 入场 200ms ease-out，从 scale(0.97)+opacity 0 开始，列表项 stagger 40ms |
| 好看一点 | 对照 `design/mockups/home.png` 实现，保留它的布局、间距、字体和层级 |
| 别用卡片套卡片 | 二级分组只用背景色差（--surface vs --bg）或 24px 间距 |
| 文字排版好一点 | 全局 `text-wrap: pretty`，正文最大 65ch，行高 1.6 |

小技巧：
- **说不出想要什么动效时**，用 Emil 的 `animation-vocabulary` 技能把模糊描述翻译成准确术语（例如"弹出来那种感觉"→ Pop in，"iOS 那种回弹"→ Rubber-banding），再拿这个词去提示 AI。
- **用 Impeccable 的方向词**：`bolder`（太平淡时放大）、`quieter`（太花时收敛）、`distill`（精简到本质）、`typeset`（修字体和层级）、`layout`（修间距和节奏）。比"好看一点"更可控。

---

## 6. 推荐技能

### 6.1 Emil Kowalski 的 skills 仓库
- 仓库：https://github.com/emilkowalski/skills （MIT，主页 https://emilkowal.ski/skill ）
- 理念文章："Agents with Taste" https://emilkowal.ski/ui/agents-with-taste ——"如果你知道'好'是什么感觉，就把规则写下来交给 agent。"
- 安装：
  ```bash
  npx skills@latest add emilkowalski/skills
  ```
- 和本文最相关的技能：
  - `emil-design-eng`：主技能，以动效为主，也有设计建议
  - `animate` / `review-animations` / `improve-animations` / `find-animation-opportunities`：做动效、严格评审动效、审计全代码库、找值得加动效的地方（也会告诉你哪里不该加）
  - `animation-performance`：修掉帧
  - `animation-vocabulary`：动效术语反查
  - `break-ui`：用 worst-case 数据测试 UI
  - `mobile-native`：让网页在手机上像原生 App
  - `pick-ui-library`：让 agent 用靠谱的库，而不是手写 toast 之类的组件
  - `prototype`：一次做多个版本，用切换器对比
  - `apple-design`：从 WWDC 设计演讲提炼的界面和动效原则，转写成 web 版
- Emil 10/17 推荐的组合：`/find-animation-opportunities → /animate → /review-animations`

### 6.2 Impeccable（Paul Bakaus）
- 仓库：https://github.com/pbakaus/impeccable （Apache-2.0）
- 文档：https://impeccable.style
- 定位："Design guidance for AI coding agents"，从 Anthropic 的 frontend-design 技能出发；支持 Claude Code、Cursor、Codex 等。
- 安装：在项目根目录运行
  ```bash
  npx impeccable install
  ```
  然后在 AI 工具里运行 `/impeccable init`。
- 内容：1 个技能、24 个命令（`craft`、`shape`、`critique`、`audit`、`polish`、`harden`、`onboard`、`typeset`、`layout`、`animate`、`bolder`、`quieter`、`distill`、`live` 等），59 条确定性检测规则（CLI 和浏览器扩展不需要 LLM 或 API key 就能跑），以及 `live` 模式（在本地 dev server 的浏览器里直接迭代视觉变体）。
- 建议用法：
  - 新项目：`/impeccable init` → `/impeccable shape`（写码前先规划 UX/UI）→ 实现 → `/impeccable critique` + `/impeccable audit` → `/impeccable polish`
  - 老项目：`/impeccable document` 生成 DESIGN.md
  - 边界情况：`/impeccable harden`（错误处理、国际化、文本溢出）、`/impeccable onboard`（首次使用流程和空状态）
- Paul 9/16 还发布了 "Impeccable for PRs"（封闭测试）：一个模拟用户、实际使用 app、找交互摩擦和"AI 味"的设计评审 agent。

### 6.3 其他
- UI 技能目录：https://www.ui-skills.com/ （@shannholmberg 提到）
- 你自己的 ui-design-skills case study（见第 0 节）

---

## 7. 一页速查：给 Codex 的开场提示词

```
这是一个 UI 任务。
1. 先读 DESIGN.md 和 design/mockups/ 里的定稿图。
2. 如果还没有定稿图：先用 imagegen 出 2 个方向的视觉稿，等我确认后再写代码。
3. 实现时只用 DESIGN.md 里的 token，不新增颜色、间距或动效值。
4. 先实现视觉核心（<某个组件>），截图给我确认，再扩展到整页。
5. 完成后：桌面和移动端截图，对照定稿自查层级、间距、字号、换行；
   再跑 break-ui（超长文本、空状态、500 条数据），列出问题并修复。
```

---

## 来源

### 你自己的帖子
- 10/17，"A beautiful component doesn't automatically make a beautiful page…"：https://x.com/yu_qi_77/status/2111500188447810015
- 10/17，回复 @giadotai："A page can pass functional checks and still have weak hierarchy…"：https://x.com/yu_qi_77/status/2111497228929888341
- 被回复的原帖（@giadotai，"how did codex get so good at coding but still struggle to make a decent looking ui?"）：https://x.com/giadotai/status/2111025412285616492
- case study：https://github.com/wr-fenglei/ui-design-skills/blob/main/examples/translucent-ui/case-study.md

### @emilkowalski（Emil Kowalski，Linear）
- 10/17，技能组合 find-animation-opportunities → animate → review-animations：https://x.com/emilkowalski/status/2111450789566943247
- 10/14，交互和动画时长规范（"Share them with your agents"）：https://x.com/emilkowalski/status/2110429909160264027
- 10/12，Sonner toast 拖拽阻尼细节：https://x.com/emilkowalski/status/2109640956882592128
- 10/11，新增 /animation-performance 技能（blur 值保持小、不动画阴影、不频繁切换 CSS 变量）：https://x.com/emilkowalski/status/2109277388437868623
- 10/9，元素越大、移动越远，动画应越慢：https://x.com/emilkowalski/status/2108531407786242389
- 10/4，新增 /mobile-native 和 /break-ui：https://x.com/emilkowalski/status/2106752670405099523
- 9/28，多个元素动画要 stagger：https://x.com/emilkowalski/status/2104634532154524054
- 9/25，让 AI 用 worst-case 数据弄坏自己的 UI：https://x.com/emilkowalski/status/2103516287452483885
- 9/24，建议全局默认 `text-wrap: pretty`：https://x.com/emilkowalski/status/2103124466352210045
- 9/23，Linear 弹窗动画：统一遮罩和弹窗时长，spring 改成 ease-out：https://x.com/emilkowalski/status/2102798004281635184
- 仓库：https://github.com/emilkowalski/skills ；文章：https://emilkowal.ski/ui/agents-with-taste

### @pbakaus（Paul Bakaus，Impeccable 作者）
- 9/16，Impeccable for PRs：https://x.com/pbakaus/status/2100284971961430019
- 9/16，Impeccable for PRs 的细节（更强的 critique/audit，接入 AI 代码审查流程）：https://x.com/pbakaus/status/2100298797301768645
- 9/10，重新设计 Impeccable 官网（"calmer, cleaner, and more elegant"）：https://x.com/pbakaus/status/2097841089965379971
- 9/11，Impeccable 起源和理念的演讲：https://x.com/pbakaus/status/2098218157202944269
- 9/23，Impeccable live 模式：https://x.com/pbakaus/status/2102634037764604309
- 10/1，让 agent 把设计系统的层级（elevation）可视化：https://x.com/pbakaus/status/2105734418791092246
- 仓库：https://github.com/pbakaus/impeccable ；文档：https://impeccable.style ；公司页：https://renaissance-geek.ai/impeccable

### @shannholmberg（Shann³）
- 9/21，先让 Codex 用 imagegen 出视觉稿再实现（完整 7 步流程）：https://x.com/shannholmberg/status/2102163474709389562
- 其中提到的技能目录：https://www.ui-skills.com/
- 他引用的 @Voxyz_ai 帖子（"Use imagegen to reimagine this page, then implement it."）：https://x.com/Voxyz_ai/status/2101295246659182978

### @CoreyGallon（Corey J. Gallon）
- 9/30，转述 @pbakaus：禁用 Inter/Roboto 只会把模型推向同类次优字体，"Claude 米色"取代紫色渐变成为新的 AI 设计标志：https://x.com/CoreyGallon/status/2105304253317148861

### 说明
- 上面的账号来自 X 公开搜索，**不确定你是否关注**。你的关注列表、主页时间线、点赞和书签都没能读到：没有读关注列表的接口，其他几个接口需要 X API 额度，而当前额度为 $0。
- DESIGN.md 模板里的具体数值（字号刻度、间距、阴影、150–250ms 等）是**通用起步默认值**，不是出自某位设计师的原文；动效原则（入场用 ease-out、不从 scale(0) 开始、大元素更慢、stagger、不动画阴影、`text-wrap: pretty`）出自 Emil Kowalski 的帖子和 skills 仓库。
