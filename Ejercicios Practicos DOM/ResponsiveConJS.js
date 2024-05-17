export default function responsiveConJS(id, mediaQuery, mobile, escritorio){

    let prueba = matchMedia(mediaQuery)

    const responsive = (e)=>{
        if (prueba.matches) {
            document.getElementById(id).innerHTML = escritorio
        }else{
            document.getElementById(id).innerHTML = mobile
        }
    }
    responsive();
    prueba.addEventListener("change", responsive);
}