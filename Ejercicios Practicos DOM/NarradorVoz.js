export default function sonarVoz(){
    const synth = window.speechSynthesis;

    const inputForm = document.querySelector(".form-Voz");
    const inputTxt = document.querySelector("#lectura");
    const voiceSelect = document.querySelector("#voces");
    
    let voices = [];
    let Speech = new SpeechSynthesisUtterance();
 

    document.addEventListener("DOMContentLoaded", e =>{
            speechSynthesis.addEventListener("voiceschanged", e =>{
                voices = speechSynthesis.getVoices(); 

                voices.forEach(ele =>{
                    let option = document.createElement("option");
                    option.value = ele.name;
                    option.textContent = ele.name;
                    voiceSelect.appendChild(option);
                                    })
                 })
    })
    

    document.addEventListener("change", e =>{
            if (e.target.matches("#voces")) {
                Speech.voice = voices.find((voice) => voice.name === e.target.value);
            }
     })

    document.addEventListener("click", e =>{
            if (e.target.matches("#sonar")) {
                let texto = document.getElementById("lectura").value;
                Speech.text = texto;
                window.speechSynthesis.speak(Speech);
            }
    })




    
}