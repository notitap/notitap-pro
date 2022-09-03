module.exports = {
  displayName: 'notitap-pro-vue',
  preset: '../../jest.preset.js',
  transform: {
    '^.+.vue$': 'vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/notitap-pro-vue',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'apps/notitap-pro-vue/tsconfig.spec.json',
    },
    'vue-jest': {
      tsConfig: 'apps/notitap-pro-vue/tsconfig.spec.json',
    },
  },
};
