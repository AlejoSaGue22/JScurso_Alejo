export default function SmartVideo(){
    const $video = document.querySelectorAll("video[data-smart-video]")

    const cb = (entries) => {
        console.log(entries, "estes es entries");
        entries.forEach(element => {
            if (element.isIntersecting) {
                element.target.play()
            }else{
                element.target.pause()
            }
            window.addEventListener("visiblechange", e =>{
                document.visibilityState === "visible" ? element.target.play() : element.target.pause()
            })
        });

    }
    const observe = new IntersectionObserver(cb, {
        threshold: 0.5
    })

    $video.forEach((element) =>{ observe.observe(element)})
}