const Name = 'css-tricks',
Domain = `https://${Name}.com`,
Site =   `${Domain}/wp-json`,
Api_Wp = `${Site}/wp/v2`,
Posts = `${Api_Wp}/posts?_embed`,
Post = `${Api_Wp}/posts`
Search = `${Api_Wp}/search?_embed&search=`;



export default {Name, Domain, Site, Api_Wp, Posts, Post, Search}