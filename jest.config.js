module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js', // No need to cover bootstrap file
  ],
  testMatch: ['**/tests/**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)']
}
