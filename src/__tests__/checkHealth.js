import checkHealth from '../checkHealth';

test.each([
  [
    {
      name: 'FirstMage',
      health: 55,
    },
    'healthy',
  ],
  [
    {
      name: 'SecondMage',
      health: 45,
    },
    'wounded',
  ],
  [
    {
      name: 'ThirdMage',
      health: 10,
    },
    'critical',
  ],
])('testing checkHealth function with %s character', (char, status) => {
  const result = checkHealth(char);
  expect(result).toBe(status);
});
