export default function formValidacion(){
        const $form = document.querySelector(".contact-form");
        const $inputs = document.querySelectorAll(".contact-form [required]")

        console.log($inputs);

        $inputs.forEach(input => {
            const $span = document.createElement("span");
            $span.id = input.name;
            $span.textContent = input.title;
            $span.classList.add("contact-form-error", "none");
            input.insertAdjacentElement("afterend", $span);
        })
 
        document.addEventListener("keyup", (e) =>{
            if (e.target.matches(".contact-form [required]")){
                console.log(e);
                let pattern = e.target.pattern || e.target.dataset.pattern;

                if (pattern && e.target.value != "") {
                    let regex = new RegExp(pattern);
                    return (!regex.exec(e.target.value) ? document.getElementById(e.target.name).classList.add("is-active"):
                             document.getElementById(e.target.name).classList.remove("is-active"));           
                }

                if (!pattern) {
                    return ((e.target.value == "") ? document.getElementById(e.target.name).classList.add("is-active"): 
                            document.getElementById(e.target.name).classList.remove("is-active"));  
                }
            }
        })

        document.addEventListener("submit", e =>{
            // e.preventDefault();do
          let $form = document.querySelector(".contact-form");
          let cargando =  document.querySelector(".contact-form-loader"),
              mensaje = document.querySelector(".contact-form-response");
              cargando.classList.remove("none");

            setTimeout(()=>{
                mensaje.classList.remove("none")
                cargando.classList.add("none")
                $form.reset()
                setTimeout(()=> mensaje.classList.add("none"),3000)
            },3000)
        })
}