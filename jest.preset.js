const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'mjs', 'html'],
  transform: {
    '.+\\.(svg)$': 'jest-transform-stub',
    '^.+\\.(tsx?|js|html)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
};
