/**
 * This test exists **only for CI pipeline purposes**.
 *
 * - Ensures Jest is running correctly
 * - Prevents the "Run Jest Tests" job from failing
 *   when no real tests have been implemented yet
 * - TODO: removed or replaced with real tests later
 */
describe('CI setup', () => {
  it('should run tests successfully', () => {
    expect(true).toBe(true);
  });
});
