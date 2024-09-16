export function SearchForm(){
    const search = document.createElement("form"),
    input = document.createElement("input");

    search.classList.add("search-form");
    input.type = 'search';
    input.name = 'search';
    input.placeholder = 'Buscar....';
    input.autocomplete = 'off';

    search.appendChild(input);

    if (location.hash.includes("#/search")) {
        input.value = localStorage.getItem("search");
    }

    document.addEventListener("search", e => {
        if (!e.target.matches("input[type='search']")) return false;

        if (!e.target.value) {
            localStorage.removeItem("search");
            document.querySelector(".loader").style.display = 'none';
        }
    })

    document.addEventListener("submit", e =>{
        if(!e.target.matches(".search-form")) return false;

        e.preventDefault();
        localStorage.setItem("search", input.value);
        location.hash = `#/search?search=${e.target.search.value}`
    })

    return search
}