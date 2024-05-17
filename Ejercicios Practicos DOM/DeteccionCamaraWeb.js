export default function camaraweb(id){
        const $video = document.getElementById(id);

        if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({video: true, audio: false}).then((stream) => { 
                    console.log(stream);
                    $video.srcObject = stream;
                    $video.play();
                }).catch((err) => {
                    $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`);
                    console.log("Sucedio el siguiente error: "+err)
                
                })
        }
} 