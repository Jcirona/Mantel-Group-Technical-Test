var topThreeUrl = require('./top_3_url')

test('return the top 3 most visited URLs', () => {
    expect(topThreeUrl()).toContain('/docs/manage-websites/', '/intranet-analytics/', '/http://example.net/faq/')
})