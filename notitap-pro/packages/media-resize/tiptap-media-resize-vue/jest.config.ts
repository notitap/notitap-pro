module.exports = {
  displayName: 'media-resize-tiptap-media-resize-vue',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+.vue$': 'vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory:
    '../../../coverage/packages/media-resize/tiptap-media-resize-vue',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig:
        'packages/media-resize/tiptap-media-resize-vue/tsconfig.spec.json',
    },
    'vue-jest': {
      tsConfig:
        'packages/media-resize/tiptap-media-resize-vue/tsconfig.spec.json',
    },
  },
};
