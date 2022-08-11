var topThreeIP = require('./top_3_ip')

test('return the top 3 most active IP addresses', () => {
    expect(topThreeIP()).toContain('168.41.191.40', '177.71.128.21', '50.112.00.11 ')
})