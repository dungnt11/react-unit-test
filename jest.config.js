module.exports = {
  rootDir: '.',
  displayName: { name: 'enzyme-setup', color: 'blue' },
  runner: 'jest-runner',
  verbose: true,
  errorOnDeprecated: true,
  roots: ['./Tests'],
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ["<rootDir>Tests/setupTest.js"],
  testRegex: "((\\.|/*.)(spec))\\.js?$",
  "moduleNameMapper": {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  }
}
