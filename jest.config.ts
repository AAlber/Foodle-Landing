import type { Config } from "@jest/types";

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    preset: "ts-jest",
    rootDir: ".",
    testEnvironment: "node",
    // globalSetup: [] TODO Make separate server, use seed, teardown
    // setupFilesAfterEnv,
    // globalTeardown,
    globals: {
      "ts-jest": {},
      testData: {},
    },
  };
};
