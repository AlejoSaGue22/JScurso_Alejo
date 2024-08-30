import wp_api from "../app/helpers/wp_api.js";

export function App(){
    document.getElementById("root").innerHTML = `<h1>Bienvenido a mi primer SPA con Vanilla JS</h1>`;
}

export async function Api_Rest(url){
  let res = await fetch(url);
    console.log(res);
}

Api_Rest(wp_api.Domain)