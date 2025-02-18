import wp_api from "../helpers/wp_api.js";

export function Title(){
    const h1 = document.createElement("h1");
    h1.innerHTML = `
            <a href="${wp_api.Domain}" target="_blank" rel="noopener">
                    ${wp_api.Name.toUpperCase()}
            </a>
        `

    return h1
}