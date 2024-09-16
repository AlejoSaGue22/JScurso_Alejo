import  { App }  from "../app/App.js";
import { Router } from "./components/router.js";
import wp_api from "./helpers/wp_api.js";


document.addEventListener("DOMContentLoaded", App)
let aux = 1;
window.addEventListener("hashchange", ()=>{
    wp_api.page = aux;
    App()
})

window.addEventListener("scroll", e =>{  
    let { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    // console.log(scrollTop, clientHeight, scrollHeight);
    // console.log("Suma:" + (scrollTop + clientHeight));
    
    if ((scrollTop + clientHeight) >= scrollHeight) {
        aux = aux + 1;
        wp_api.page = aux;
        console.log(wp_api.page);
        console.log(wp_api);
        Router()
    }
})