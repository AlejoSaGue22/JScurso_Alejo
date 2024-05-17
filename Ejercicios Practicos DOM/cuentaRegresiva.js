export function cuentaRegresiva(){
    let fecha = new Date(),
    hora = fecha.getHours(),
    minutos = fecha.getMinutes(),
    segundos = fecha.getSeconds();

    setInterval(()=>{
        if (segundos == 0) {
            minutos--
            segundos = 60;
            if (minutos == 0) {
                hora--
                minutos = 60
            }
        }
        document.getElementById("cuentaRegresiva").innerHTML = `
        <label> Cuenta Regresiva en Proceso.....</label><br>
        <strong> ${hora} Horas con ${minutos} minutos y ${segundos--} segundos</strong>
        `
    },1000)  

}

export function cuentaRegresivaJonMircha(id, limitDate, finalMessage){
    const $countdown = document.getElementById(id),
    countdownNewDate = new Date(limitDate).getTime()

    let countdownNewTEMP = setInterval(()=>{
        let now = new Date().getTime(),     
        limitTime = countdownNewDate - now,
        days = Math.floor(limitTime / (1000 *60 * 60 * 24)),
        hours = ("0"+ Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))).slice(-2),
        minutes =  ("0"+ Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
        seconds = ("0"+ Math.floor((limitTime % (1000 * 60)) / (1000))).slice(-2);
        // console.log(limitTime);
        
        $countdown.innerHTML = `<h3> Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos </h3>`
            if (limitTime < 0) {
                clearInterval(countdownNewTEMP);
                $countdown.innerHTML = `${finalMessage}`
            }
        
    },1000)

}