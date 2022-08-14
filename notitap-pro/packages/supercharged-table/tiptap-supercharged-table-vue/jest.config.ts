module.exports = {
  displayName: 'supercharged-table-tiptap-supercharged-table-vue',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+.vue$': 'vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory:
    '../../../coverage/packages/supercharged-table/tiptap-supercharged-table-vue',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig:
        'packages/supercharged-table/tiptap-supercharged-table-vue/tsconfig.spec.json',
    },
    'vue-jest': {
      tsConfig:
        'packages/supercharged-table/tiptap-supercharged-table-vue/tsconfig.spec.json',
    },
  },
};
