const Parser = require('rss-parser');
const parser = new Parser();

async function fetchRSS(url) {
  const feed = await parser.parseURL(url);
  return feed.items.map(item => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    content: item.contentSnippet
  }));
}

module.exports = { fetchRSS };