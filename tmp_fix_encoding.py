from pathlib import Path

path = Path('README.md')
raw = path.read_bytes()
# Decode with utf-8 fallback to latin-1 for any invalid sequences, then rewrite as UTF-8.
try:
    text = raw.decode('utf-8')
except UnicodeDecodeError:
    text = raw.decode('latin-1')
path.write_text(text, encoding='utf-8')
print('done')
