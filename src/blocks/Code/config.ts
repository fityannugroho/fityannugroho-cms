import type { Block } from 'payload'

export const Code: Block = {
  slug: 'code',
  interfaceName: 'CodeBlock',
  fields: [
    {
      name: 'language',
      type: 'select',
      defaultValue: 'tsx',
      options: [
        // See supported languages in https://github.com/FormidableLabs/prism-react-renderer?tab=readme-ov-file#language
        {
          label: 'Typescript (ts, tsx)',
          value: 'tsx',
        },
        {
          label: 'Javascript (js, jsx)',
          value: 'jsx',
        },
        {
          label: 'HTML',
          value: 'markup',
        },
        {
          label: 'JSON',
          value: 'json',
        },
        {
          label: 'Swift',
          value: 'swift',
        },
        {
          label: 'Kotlin',
          value: 'kotlin',
        },
        {
          value: 'objectivec',
          label: 'Objective-C',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Markdown',
          value: 'markdown',
        },
        {
          label: 'C++',
          value: 'cpp',
        },
        {
          label: 'Go',
          value: 'go',
        },
        {
          label: 'YAML',
          value: 'yaml',
        },
        {
          label: 'GraphQL',
          value: 'graphql',
        },
        {
          label: 'Rust',
          value: 'rust',
        },
        {
          label: 'Reason',
          value: 'reason',
        },
        {
          label: 'JS Extras',
          value: 'js-extras',
        },
      ],
    },
    {
      name: 'code',
      type: 'code',
      label: false,
      required: true,
    },
  ],
}
