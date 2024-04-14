// コマンドライン引数を取得
const { program } = require('commander');
program.option('-m, --mode <string>').option('-o, --options-dir <string>');
program.parse();
const opts = program.opts();
const { mode, optionsDir = '..' } = opts;
// esbuildのoptionsを取得
const optionsPath = mode ? `${optionsDir}/build.options.${mode}` : `${optionsDir}/build.options`;
const options = require(optionsPath);

const esbuild = require('esbuild');

esbuild.build(options).catch(() => process.exit(1));
