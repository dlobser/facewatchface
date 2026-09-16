"""Prepare the static site for GitHub Pages' repository subpath."""
import os
from pathlib import Path
import shutil

project = Path(__file__).resolve().parents[1]
source = project / 'dist'
output = project / '_site'
base = os.environ.get('PAGES_BASE_PATH', '/facewatchface').rstrip('/')
if base and (not base.startswith('/') or any(c in base for c in '\"\'`<>\\')):
    raise ValueError('Invalid Pages base path')
output.mkdir(exist_ok=True)
shutil.copytree(source, output, dirs_exist_ok=True)
for page in output.rglob('*.html'):
    text = page.read_text(encoding='utf-8')
    for attribute in ('href', 'src'):
        text = text.replace(f'{attribute}="/', f'{attribute}="{base}/')
    page.write_text(text, encoding='utf-8')
app = output / 'app.js'
app.write_text(app.read_text(encoding='utf-8').replace('`/assets/', f'`{base}/assets/'), encoding='utf-8')
(output / '.nojekyll').touch()
print(f'Prepared website at {base or "/"}')
