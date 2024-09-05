export function ajax(props){
        let {url, cbSuccess} = props;

        fetch(url).then(res => res.ok ? res.json() : Promise.reject(res)).then(respu => {
            cbSuccess(respu)
        }).catch(err => {
            let message = err.statusText || "Ocurrio un error al acceder a la API"
            document.getElementById("root").innerHTML = `<div class="error"> <p>${message}: ${err.status} <p></div>`
            }
        )

}