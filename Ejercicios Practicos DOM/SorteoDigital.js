export default function SorteoDigital(id){
    let $botn = document.getElementById(id)

    document.addEventListener("click", e =>{
        if (e.target.matches(`#${id}`)) {
            let datos = document.querySelectorAll(".dato")
            console.log(datos);
            let numero = Math.floor((Math.random()* datos.length))
            // datos.forEach((ele, index) => {
            //         if (numero == index) {
            //             alert("En el sorteo Aletorio elegido es: "+ele)
            //         }
            // })
            let w = datos[numero].textContent;  

            console.log(w);
            alert("En el sorteo Aletorio elegido es: "+w);
        }
    })
}