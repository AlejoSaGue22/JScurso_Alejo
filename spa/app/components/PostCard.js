export function PostCard(props){  
    let fechaFormat = new Date(props.date).toLocaleDateString(),
    img = props._embedded["wp:featuredmedia"] ? props._embedded["wp:featuredmedia"][0].source_url : "app/assets/chat.png";

    document.addEventListener("click", e =>{
        if (!e.target.matches(".post-card a")) return false

        localStorage.setItem("id", e.target.dataset.id)
    })

    return `
        <article class="post-card">
        <img src="${img}" alt="${props.title.rendered}">
        <h2>${props.title.rendered}</h2>
        <p>
            <time datetime="${props.date}">${fechaFormat}</time>
            <a href="#/${props.slug}" data-id="${props.id}"> Ver Publicacion</a>
        </p>
        </article>
    `;
}