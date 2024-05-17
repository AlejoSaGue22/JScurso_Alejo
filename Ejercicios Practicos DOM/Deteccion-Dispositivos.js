export default function UserDeviceInfo(id){
        const $id = document.getElementById(id),
        isMobile = {
            android: ()=> navigator.userAgent.match(/android/i),
            ios:     ()=> navigator.userAgent.match(/iphone|ipad|ipod/i),
            windows:     ()=> navigator.userAgent.match(/windows phone/i),
            any: function () {
              return this.android() || this.ios() || this.windows();
            }
        },
        isDesktop = {
            linux: ()=> navigator.userAgent.match(/linux/i),
            mac:     ()=> navigator.userAgent.match(/mac os/i),
            windows:     ()=> navigator.userAgent.match(/windows nt/i),
            any: function () {
              return this.linux() || this.mac() || this.windows();
                             }
        },

        isBrowser = {
            chrome:  ()=> navigator.userAgent.match(/chrome/i),
            safari:  ()=> navigator.userAgent.match(/safari/i),
            firefox: ()=> navigator.userAgent.match(/firefox/i),
            opera:   ()=> navigator.userAgent.match(/opera|opera mini/i),
            ie:      ()=> navigator.userAgent.match(/msie|iemobile/i),
            edge:    ()=> navigator.userAgent.match(/edge/i),
            any: function () {
              return this.chrome() || this.safari() || this.firefox() || this.opera() ||  this.ie() || this.edge();
            }
        }
        $id.innerHTML = `
                        <ul>
                            <li>User Agent: <b>${navigator.userAgent}</b></li><br>
                            <li>Plataforma <b>${isMobile.any()? isMobile.any():isDesktop.any()}</b></li>
                        </ul>
                      `

        if (isBrowser.chrome()) {
            $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`
        }

        if (isBrowser.firefox()) {
            $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`
        }

        if (isDesktop.mac()) {
            $id.innerHTML += `<p><mark>Este contenido solo se ve en Mac</mark></p>`
        }

        if (isDesktop.linux()) {
            $id.innerHTML += `<p><mark>Este contenido solo se ve en Linux</mark></p>`
        }

        if (isMobile.android()) {
            location.href = "https://jonmircha.com/cursos";
        }
        
}