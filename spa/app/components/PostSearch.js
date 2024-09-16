
export function PostSearch(props){
    let pro = props._embedded.self[0],
    fechaFormat = new Date(props._embedded.self[0].date).toLocaleDateString(),
    img = pro.uagb_featured_image_src.medium[0] ? pro.uagb_featured_image_src.medium[0] : "app/assets/chat.png";

    document.addEventListener("click", e => {
        if (!e.target.matches(".post-card a")) return false;

        localStorage.setItem("idSearch", e.target.dataset.id)
    })

    return `
        <article class="post-card">
            <img src="${img}" alt="${props.title}">
            <h2>${props.title}</h2>
            <p>
                <time datetime="${pro.date}">${fechaFormat}</time>
                <a href="#/${pro.slug}" data-id="${props.id}"> Ver Publicacion</a>
            </p>
        </article>
    `;
}