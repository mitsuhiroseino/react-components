const components = require('./components').filter((component) => !component.disabled);
const postFormatting = {
  arrowParens: 'always',
  semi: true,
  useTabs: false,
  tabWidth: 2,
  bracketSpacing: true,
  singleQuote: true,
  printWidth: 120,
  trailingComma: 'all',
  endOfLine: 'auto',
  organizeImportsSkipDestructiveCodeActions: true,
  plugins: ['prettier-plugin-organize-imports'],
};
const migrate = require('@visue/migration');
const { OPERATION_TYPE } = migrate;
const { GENERATE } = OPERATION_TYPE;
const Migration = migrate.default;
const migration = new Migration();

const COMPONENT_TEMPLATE_PATH = './scripts/generate/templates/$/Ss';
const COMPONENT_OUTPUT_PATH = './src/{{category}}/Ss{{uppercamelcase}}';
const STORY_TEMPLATE_PATH = './scripts/generate/templates/__stories__/$';
const STORY_OUTPUT_PATH = './src/__stories__/{{category}}';

migration.initConfig({
  postFormatting: { ...postFormatting, parser: 'typescript' },
  onIterationEnd: (result) => {
    console.info(`[${result.status}] ${result.outputPath}`);
  },
  tasks: [
    // Imageのmanipulationを生成
    {
      id: 'components',
      jobs: {
        templatePath: COMPONENT_TEMPLATE_PATH,
        outputPath: COMPONENT_OUTPUT_PATH,
        itemName: { patterns: /^Ss.tsx$/, replacement: 'Ss{{componentType}}.tsx' },
        iteration: components,
        operations: {
          type: GENERATE,
        },
      },
    },
    {
      id: 'story',
      jobs: {
        templatePath: STORY_TEMPLATE_PATH,
        outputPath: STORY_OUTPUT_PATH,
        itemName: (str, params) => {
          const { uppercamelcase } = params;
          if (str === 'Ss.stories.tsx') {
            return `Ss${uppercamelcase}.stories.tsx`;
          } else {
            return str;
          }
        },
        iteration: components,
        operations: {
          type: GENERATE,
        },
      },
    },
  ],
});

migration
  .run()
  .then((result) => console.info(result))
  .catch((error) => console.error(error));
