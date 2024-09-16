import { ajax } from "../helpers/ajax.js";
import wp_api from "../helpers/wp_api.js";
import { ContactForm } from "./ContactForm.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { PostSearch } from "./PostSearch.js";

export async function Router(){
    let has = location.hash;
    // console.log(has);
    // console.log(location);
    document.querySelector(".loader").style.display = 'block';
    
    if (!has || has === '#/') { 
        await ajax({
                url: wp_api.Posts,
                cbSuccess: (data) =>{
                    console.log(data);
                    let html = '';
                    data.forEach(element => {
                        html += PostCard(element);
                    });
                    document.querySelector(".loader").style.display = 'none';
                    document.querySelector("#posts").innerHTML += html;
                }
            })      
    } else if (has.includes('#/search')) {
        document.getElementById("posts").innerHTML = `<h2>Seccion del Buscador</h2>`;  
        if (!localStorage.getItem("search")) return false;
            await ajax({
                url: `${wp_api.Search}${localStorage.getItem("search")}`,
                cbSuccess: (data) =>{
                    if (data.length > 0) {
                        console.log(data);
                        let html = '';
                        data.forEach(element => {
                            html += PostSearch(element);
                        });
                        document.querySelector(".loader").style.display = 'none';
                        document.querySelector("#posts").innerHTML += html;
                    }else{
                        document.getElementById("posts").innerHTML += `
                            <div class="error"> <p>No existe resultados de esta busqueda <mark> ${localStorage.getItem("search")} </mark><p></div>`
                    }
                }
            })  
    } else if (has.includes('#/contacto')) {
        document.getElementById("posts").appendChild(ContactForm()) 
    } else {
        // Post()
        document.getElementById("posts").innerHTML = `<h2>Aqui cargara el contenido del Post previamente</h2>`;        
        await ajax({
                url: `${wp_api.Post}/${localStorage.getItem("id")}`,
                cbSuccess: (data) => {
                    console.log(data);
                    document.querySelector(".loader").style.display = 'none';
                    document.querySelector("#posts").innerHTML = Post(data);
                }
               })
    }
    document.querySelector(".loader").style.display = 'none';
}