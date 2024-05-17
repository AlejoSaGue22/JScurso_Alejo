export default function Slider(prev, next){
    document.addEventListener("click",e =>{
        let $slide = document.querySelectorAll(".slider-slide")
       
                if (e.target.matches(".prev")) {  
                    e.preventDefault();   
                    let posicion;
                    $slide.forEach((ele, index) =>{
                     if (ele.classList.contains("active")){
                       posicion = index;
                       ele.classList.remove("active");
                     }
                    })
                    if(posicion == 0) { 
                        let a = $slide[$slide.length - 1]
                        console.log(a);
                        a.classList.add("active");
                    }else{
                        let a = $slide[--posicion];  
                        a.classList.add("active");
                    } 
                }

                if (e.target.matches(".next")) { 
                    e.preventDefault();
                    let posicionA;
                    $slide.forEach((ele, index)=>{
                        if (ele.classList.contains("active")) {
                            posicionA = index;
                            ele.classList.remove("active")
                        }
                    })
                    if (posicionA == ($slide.length -1)) {
                        posicionA = 0;
                        $slide[posicionA].classList.add("active");
                    }else{
                        posicionA++ 
                        $slide[posicionA].classList.add("active");
                    }
                }
    })
}