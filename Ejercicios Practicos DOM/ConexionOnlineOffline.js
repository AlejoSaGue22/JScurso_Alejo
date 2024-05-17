export default function conexionOnline(){
        const $div = document.createElement("div");

        const verificarConexion = () =>{
            window.addEventListener("online", e =>{
                let onilne = navigator.onLine;
                console.log(onilne, "online");
                if (onilne) {
                    $div.textContent = "Conexion Exitosa"
                    $div.classList.add("online");
                    $div.classList.remove("offline");
                    document.body.insertAdjacentElement("afterbegin", $div)
                    setTimeout(()=> {
                        document.body.removeChild($div);
                    }, 2000)
                }
            })

            window.addEventListener("offline", e =>{
                let onilne = navigator.onLine;
                console.log(onilne, "offline");
                if(onilne == false){
                    $div.textContent = "Conexion Desconectada";
                    $div.classList.add("offline");
                    $div.classList.remove("online");
                    document.body.insertAdjacentElement("afterbegin", $div)
                    setTimeout(()=> {document.body.removeChild($div)}, 2000)
                }
            })
        }

        verificarConexion()
}