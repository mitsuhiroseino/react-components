// mapファイルのsourceを補正する
const fs = require('fs-extra'),
  path = require('path'),
  glob = require('glob'),
  modulePath = path.resolve('./build');

if (!fs.existsSync(modulePath)) {
  console.error(`${modulePath}が存在しません。`);
}
console.log(modulePath);
const files = glob.sync('build/**/*.map', { nodir: true });
for (const file of files) {
  const mapFilePath = path.resolve(file);
  map = fs.readJsonSync(mapFilePath, { encoding: 'utf-8' });
  if (map.sources) {
    map.sources = map.sources.map((source) => `./${path.basename(source)}`);
    console.log(mapFilePath);
    fs.writeJSONSync(mapFilePath, map, { encoding: 'utf-8' });
  }
}
// // package.jsonを出力
// fs.writeJSONSync(path.join(modulePath, 'package.json'), modulePackageJson, { encoding: 'utf-8', spaces: 2 });

// // モジュールをコピー
// console.log(`${srcPath} -> ${modulePath}`);
// fs.copySync(srcPath, modulePath);
