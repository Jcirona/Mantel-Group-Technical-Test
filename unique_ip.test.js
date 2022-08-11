var uniqueIP = require('./unique_ip')

test('returns the number of unique ip addresses', () => {
    expect(uniqueIP()).toBe(11)
})