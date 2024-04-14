// buildにsrcとpackage.jsonをコピーする
const fs = require('fs-extra'),
  path = require('path'),
  packageJsonPath = path.resolve('./package.json'),
  packageJsonProps = ['name', 'version', 'author', 'license', 'main', 'module', 'types', 'private', 'dependencies'],
  modulePath = path.resolve('./build'),
  srcPath = path.resolve('./src');

if (!fs.existsSync(modulePath)) {
  console.error(`${modulePath}が存在しません。`);
}
if (!fs.existsSync(packageJsonPath)) {
  console.error(`${packageJsonPath}が存在しません。`);
}
// 必要な項目のみpackageJsonから転記
const packageJson = fs.readJSONSync(packageJsonPath),
  modulePackageJson = {};
for (const prop of packageJsonProps) {
  if (prop in packageJson) {
    modulePackageJson[prop] = packageJson[prop];
  }
}
// package.jsonを出力
fs.writeJSONSync(path.join(modulePath, 'package.json'), modulePackageJson, { encoding: 'utf-8', spaces: 2 });

// モジュールをコピー
console.log(`${srcPath} -> ${modulePath}`);
fs.copySync(srcPath, modulePath);
