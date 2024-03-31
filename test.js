const { checkHealthStatus } = require('./index');

test('health is more than 50', () => {
  const character = { name: 'Mage', health: 90 };
  expect(checkHealthStatus(character)).toBe('healthy');
});

test('health is between 50 and 15', () => {
  const character = { name: 'Warrior', health: 30 };
  expect(checkHealthStatus(character)).toBe('wounded');
});

test('health is less than 15', () => {
  const character = { name: 'Rogue', health: 10 };
  expect(checkHealthStatus(character)).toBe('critical');
});