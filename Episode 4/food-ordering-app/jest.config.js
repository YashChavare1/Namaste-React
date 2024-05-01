const config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/mocks/ImagesMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};

module.exports = config;
