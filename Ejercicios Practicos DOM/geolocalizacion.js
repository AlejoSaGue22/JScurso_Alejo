export default function ObtenerGeolocolizacion(id){
            let $div22 = document.getElementById(id),
            options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
                };

            const success = (position) => {
                console.log(position);
                let coords = position.coords;
                $div22.innerHTML = `
                <p>Tu Posicion actual es: </p>
                <ul>
                    <li>Latitud:  <b>${coords.latitude}</b></li>
                    <li>Longitud: <b>${coords.longitude}</b></li>
                    <li>Precision:<b>${coords.accuracy}</b></li>
                 </ul>
                 <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitud},1z" 
                  target="_blank" rel="noopener">Ver en Google Maps</a>  `
            }

            const error = (err) => {
                $div22.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
                console.log(`Error ${err.code}: ${err.message}`);
            }


            navigator.geolocation.getCurrentPosition(success, error, options);
} 