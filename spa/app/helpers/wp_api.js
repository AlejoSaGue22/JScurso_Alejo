let page = 1;

// const Name = 'css-tricks',
const Name = 'lucylara',
Domain = `https://${Name}.com`,
Site =   `${Domain}/wp-json`,
Api_Wp = `${Site}/wp/v2`,
Posts = `${Api_Wp}/posts?_embed`,
Post = `${Api_Wp}/posts`,
CATEGORIES = `${Api_Wp}/categories`,
PER_PAGES = 6,
Pages = `${Posts}`,
Search = `${Api_Wp}/search?_embed&per_page=${PER_PAGES}&search=`;

export default { Name, Domain, Site, Api_Wp, Posts, Post, CATEGORIES, Search, page, PER_PAGES, Pages }