export function Posts(){
 const $posts = document.createElement("section")
 $posts.id = 'posts';
 console.log(location.hash);
 console.log(location);
 location.hash.includes('#/search') ? $posts.classList.remove("grid-fluid")  : $posts.classList.add("grid-fluid");

 return $posts
}