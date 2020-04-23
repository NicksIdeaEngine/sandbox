import functions from './functions';

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Subtract 5 from 10 to equal 5', () => {
  expect(functions.subtract(10, 5)).toBe(5);
});

test('Add 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Subtract 3 from 8 to NOT equal 2', () => {
  expect(functions.subtract(8, 3)).not.toBe(2);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should NOT be undefined', () => {
  expect(functions.isNull()).not.toBeUndefined();
});

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test('Should also be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test('Should be Nick Gee object', () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: 'Nick',
    lastName: 'Gee',
  });
});

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

test('Admin should be in usernames', () => {
  const usernames = ['john', 'karen', 'admin'];
  expect(usernames).not.toContain('admin');
});
