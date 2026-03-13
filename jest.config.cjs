/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest', // TypeScript direkt testen
  testEnvironment: 'node', // Node-Umgebung reicht für Funktionen
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
