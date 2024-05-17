export default function BotonScroll(boton){
    document.addEventListener("scroll", e =>{
        const $scrollValor = document.documentElement.scrollTop
        if ($scrollValor > 680) {
            document.querySelector(boton).classList.remove("hidden")
        }else{
            document.querySelector(boton).classList.add("hidden");
        }
        // console.log($scrollValor);
    })

    document.addEventListener("click", e =>{
        if (e.target.matches(boton)) {
            scrollTo({
                behavior: "smooth",
                top: 0
                        })
                    }
            })
}