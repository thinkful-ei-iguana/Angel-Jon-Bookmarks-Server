const uuid = require('uuid/v4');

const bookmarks = [
  {
    id: uuid(),
    title:"Google",
    url: "https://google.com",
    description:"That best search engine EVER!",
    rating: 5
  },

  {
    id: uuid(),
    title: "MSN",
    url: "https://msn.com",
    description: "Like Yahoo!, but more 'business-y'",
    rating: 1
  },
];

module.exports = { bookmarks };