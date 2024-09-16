import { Menu } from "./Menu.js";
import { SearchForm } from "./SearchForm.js";
import { Title } from "./Title.js";

export function headers(){
    const headers = document.createElement("header");
    headers.classList.add("header");
    headers.appendChild(Title());  
    headers.appendChild(Menu());  
    headers.appendChild(SearchForm());  

    return headers
}