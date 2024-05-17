export default function TemaDark(boton, dataClass){

    const $botonTema = document.querySelector(boton),
    $seletor = document.querySelectorAll("[data-dark]") // Se captura en el documento HTML a todo los que tengan ese atributo en las etiqueta HTML
    console.log($seletor);

            let luna = "🌘",
                sol = "☀️"
        
                // $botonTema.innerText = localStorage.getItem("color");
                window.addEventListener("DOMContentLoaded", e =>{
                    $botonTema.innerText = localStorage.getItem("color");   
                         if ($botonTema.innerText == sol) {
                            $seletor.forEach(el => el.classList.add(dataClass)) 
                         }else{
                            $seletor.forEach(el => el.classList.remove(dataClass)) 
                         }
                })

                document.addEventListener("click", e => {
                    if (e.target.matches(boton)) {
                        console.log($botonTema.innerText);
                        if($botonTema.innerText == luna) {
                            localStorage.setItem("color", sol);
                            $botonTema.innerText = localStorage.getItem("color");       
                            $seletor.forEach(el => el.classList.add(dataClass)); 
                        }else{
                            localStorage.setItem("color", luna)
                            $botonTema.innerText = localStorage.getItem("color");       
                            $seletor.forEach(el => el.classList.remove(dataClass))
                        }
                    }
                })
        }