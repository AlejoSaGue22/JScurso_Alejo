export default function hamburgerMenu(btn, panel, a){
        document.addEventListener("click", (e)=>{
                if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
                   document.querySelector(panel).classList.toggle("is-active");
                   document.querySelector(btn).classList.toggle("is-active");
                   console.log(document.querySelector(btn).classList.contains("is-active"));
                }
                if (e.target.matches(a)) {
                    document.querySelector(panel).classList.remove("is-active");
                    document.querySelector(btn).classList.remove("is-active");
                }
        })
}

// const btn = document.querySelector(".panel-btn"), aside = document.querySelector(".panel");

// btn.addEventListener("click",(e)=>{
//     aside.classList.toggle("is-active")
//     btn.classList.toggle("is-active")
//     console.log(e);
//     console.log(e.target);
// })