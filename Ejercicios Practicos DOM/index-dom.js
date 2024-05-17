import hamburgerMenu from "./menuHambuerge.js";
import {relojDigital, alarmaSonora} from "./relojDigital.js";
import { shortcuts, movimientoBall } from "./Atajosteclado-Dom.js";
import { cuentaRegresiva, cuentaRegresivaJonMircha } from "./cuentaRegresiva.js";
import BotonScroll from "./ScrollBoton.js";
import TemaDark from "./CambiarTemasOscuro.js";
import responsiveConJS from "./ResponsiveConJS.js";
import HacerTestResponsive from "./ResponsiveTester.js";
import UserDeviceInfo from "./Deteccion-Dispositivos.js";
import conexionOnline from "./ConexionOnlineOffline.js";
import camaraweb from "./DeteccionCamaraWeb.js";
import ObtenerGeolocolizacion from "./geolocalizacion.js";
import FiltrodeBusqueda from "./FiltrodeBusqueda.js";
import SorteoDigital from "./SorteoDigital.js";
import Slider from "./Responsive_Slider.js";
import ScrollSpy from "./ScrollSpy.js";
import SmartVideo from "./VideoInteligente.js";
import formValidacion from "./contactFormValidacion.js";
import sonarVoz from "./NarradorVoz.js";


document.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn",".panel", ".menu a")
    
    relojDigital("#iniciar-reloj", "#detener-reloj")
    
    alarmaSonora("assets/alarma.mp3", "#encender-alarma", "#apagar-alarma")

    // cuentaRegresiva()

    cuentaRegresivaJonMircha("cuentaRegresiva", "Feb 16, 2024 03:23:19", "Feliz Cumpleaños amigo  Digital ⚽")

    BotonScroll(".scroll-top-btn");

    TemaDark(".dark-theme-btn", "dark-mode");

    responsiveConJS("youtube", "(min-width: 1024px)",
    `<a href="https://www.youtube.com/live/Yj6oCyWTm1o?si=TOnggAcGjf2v-t8u" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/Yj6oCyWTm1o?si=TOnggAcGjf2v-t8u" title="YouTube video player"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);

     responsiveConJS("maps","(min-width: 1024px)", 
     `<a href="https://maps.app.goo.gl/Am6Ef4DwHV4Vb8oJA" target="_blank" rel="noopener">Ver Mapa</a>`,
     `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.3621200368743!2d-74.80549782542317!3d10.935994656231093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5d3a1c878335d%3A0x750ce3c4c43fda70!2sCiudadela%2020%20De%20Julio!5e0!3m2!1ses-419!2sco!4v1708350295216!5m2!1ses-419!2sco" 
      width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    HacerTestResponsive("responsive-tester");

    UserDeviceInfo("user-device");

    camaraweb("webcam");

    ObtenerGeolocolizacion("geolocation");

    FiltrodeBusqueda(".card-filter", ".card");

    SorteoDigital("sorteo");

    Slider(".prev", ".next");

    ScrollSpy()

    SmartVideo()

    formValidacion()

})  


//  |  Atajos con el teclado  |
document.addEventListener("keydown", (e)=>{
    // shortcuts(e);
    // shortcuts(e.key);
    // shortcuts(e.ctrlKey);
    // shortcuts(e.shiftKey);
    movimientoBall(e, ".ball",".stage")



    if (e.key === 'a' && e.ctrlKey) {
        alert("Atajo con la letra A")
    }
    if (e.key === 'c' && e.ctrlKey) {
        confirm("Atajo con la letra C")
    }
    if (e.key === 'z' && e.ctrlKey) {
        confirm("Atajo con la letra Z")
    }
})

conexionOnline();
sonarVoz()