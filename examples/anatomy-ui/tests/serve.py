"""Optional local-only test server. No dependencies; only writes its JSON test report."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parent.parent

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_POST(self):
        if self.path != '/__test_report':
            self.send_error(404)
            return
        length = int(self.headers.get('Content-Length', '0'))
        if length <= 0 or length > 100000:
            self.send_error(400)
            return
        try:
            report = json.loads(self.rfile.read(length))
            if not isinstance(report.get('tests'), list):
                raise ValueError('No tests')
            (ROOT / 'tests' / 'browser-results.json').write_text(json.dumps(report, indent=2) + '\n')
        except (ValueError, TypeError):
            self.send_error(400)
            return
        self.send_response(204)
        self.end_headers()

if __name__ == '__main__':
    ThreadingHTTPServer(('127.0.0.1', 8767), Handler).serve_forever()
