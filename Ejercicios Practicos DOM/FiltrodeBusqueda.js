export default function FiltrodeBusqueda(id, selector){
    document.addEventListener("keyup", e  =>{
            if (e.target.matches(id)) {
                // console.log(e.target.value);
                if (e.key === "Escape") e.target.value = "";
                document.querySelectorAll(selector).forEach(element => {
                    element.textContent.toLowerCase().includes(e.target.value) == true ? element.classList.remove("filter") : element.classList.add("filter") 
                });
            }
     })
}