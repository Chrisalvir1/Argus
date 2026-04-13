import ast, os

base = 'custom_components/argus'
all_ok = True
for f in sorted(os.listdir(base)):
    if f.endswith('.py'):
        path = os.path.join(base, f)
        try:
            ast.parse(open(path, encoding='utf-8').read())
            print(f'  OK  {f}')
        except SyntaxError as e:
            print(f'  ERR {f} line {e.lineno}: {e.msg}')
            all_ok = False

print()
print('ALL_CLEAN' if all_ok else 'HAS_ERRORS')
