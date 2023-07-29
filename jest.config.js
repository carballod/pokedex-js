module.exports = {
  moduleFileExtensions: ["js", "json", "mts", "cts"],
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  testEnvironment: 'jest-environment-jsdom'
};
