import wp_api from "../app/helpers/wp_api.js";
import { ajax } from "../app/helpers/ajax.js";
import { Title } from "../app/components/Title.js";
import { Loader } from "../app/components/Loader.js";

export function App(){
    // document.getElementById("root").innerHTML = `<h1>Bienvenido a mi primer SPA con Vanilla JS</h1>`;
     document.getElementById("root").appendChild(Title())
     document.getElementById("root").appendChild(Loader())
}

// export async function Api_Rest(url){
//     let res = await fetch(url),
//     json = await res.json()
//       console.log(json);
// }

// Api_Rest(wp_api.CATEGORIES)

ajax({
  url: wp_api.CATEGORIES,
  cbSuccess: (data) =>{
    console.log(data);
  }
})