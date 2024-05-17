
export function relojDigital(iniciar, detener){

    let tempClock;
    document.addEventListener("click", (e)=>{
        if (e.target.matches(iniciar)) {
            tempClock = setInterval(()=>{
                            let date = new Date().toLocaleTimeString();
                            document.getElementById("tiempoA").innerHTML = `<h3>${date}</h3>`;
                        },1000);
            console.log(e);
            e.target.disabled = true;
        }

        if (e.target.matches(detener)) {
            clearInterval(tempClock);
            document.getElementById("tiempoA").innerHTML = null;
            document.querySelector(iniciar).disabled = false;    
        }
    });
                }

export function alarmaSonora(ruta, encender, apagar){
    let tempAlarma;
    const audio = document.createElement("audio");
    audio.src = ruta;
    document.addEventListener("click",(e)=>{
                if (e.target.matches(encender)) {
                    tempAlarma = setTimeout(()=>{
                        audio.play();
                    },2000)
                }

                if (e.target.matches(apagar)) {
                    audio.pause();
                }
    })

}


 