module.exports = {
  displayName: 'draggable-block-tiptap-draggable-block-vue',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+.vue$': 'vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory:
    '../../../coverage/packages/draggable-block/tiptap-draggable-block-vue',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig:
        'packages/draggable-block/tiptap-draggable-block-vue/tsconfig.spec.json',
    },
    'vue-jest': {
      tsConfig:
        'packages/draggable-block/tiptap-draggable-block-vue/tsconfig.spec.json',
    },
  },
};
