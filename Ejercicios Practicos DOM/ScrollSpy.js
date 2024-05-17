export default function ScrollSpy(){
    const $section = document.querySelectorAll("section[data-scroll-spy]")
    const cb = (entries) => {
        entries.forEach((entry)=>{
                const id = entry.target.getAttribute("id") 
                if (entry.isIntersecting){
                    
                    document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")
                }else{
                    document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")
                }
                                })
     }

    const observer = new IntersectionObserver(cb, {
        // root: 
        //rootMargin: "-250px",
        threshold: [0.5,0.75]
    })

    $section.forEach(el => observer.observe(el))
} 