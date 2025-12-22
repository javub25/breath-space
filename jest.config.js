export default {
  testEnvironment: '@happy-dom/jest-environment',
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    "\\.(svg|css)$": "<rootDir>/src/mocks/svgMock.ts",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
