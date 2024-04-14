const { generateIndexes } = require('@visue/dev');
const args = process.argv;
const targetPath = args[2] || './src';
generateIndexes(targetPath, { excludeDirNames: ['__stories__'] });
