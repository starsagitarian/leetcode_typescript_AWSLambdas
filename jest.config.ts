import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    rootDir: './',
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testTimeout: 70000
}
export default config;