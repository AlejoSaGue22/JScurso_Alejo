export function Post(post){
    let dateP = new Date(post.date).toLocaleDateString()
    return `
    <section class="post-page">
        <aside>
            <h2>${post.title.rendered}</h2>
            <time datetime="${post.date}">Fecha: ${dateP}</time>
        </aside>
        <hr>
        <article>${post.content.rendered}</article>
    </section>
    `
}