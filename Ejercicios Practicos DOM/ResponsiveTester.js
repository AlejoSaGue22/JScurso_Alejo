export default function HacerTestResponsive(form){
        const $formulario = document.getElementById(form)
        let test;
       document.addEventListener("submit", e =>{
                        if (e.target == $formulario) {
                           test = window.open($formulario.url.value, "tester", `innerWidth=${$formulario.ancho.value}, innerHeight=${$formulario.alto.value}`)
                        }
       })

       document.addEventListener("click", e =>{
                    if (e.target == $formulario.cerrar) {
                        test.close();
                    }
       })
}