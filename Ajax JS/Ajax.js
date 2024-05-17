(function(){
     const xhr = new XMLHttpRequest(),
        $olXhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

        
        xhr.addEventListener("readystatechange", e =>{
            // console.log(xhr);         
            if(xhr.readyState !== 4) return;

            if (xhr.status >= 200 && xhr.status < 300) {
                // console.log("Exito");
                // console.log(xhr.responseText);

                let json = JSON.parse(xhr.response)
                json.forEach(element => {
                   const $li = document.createElement("li");
                   $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                   $fragment.appendChild($li)
                });
                $olXhr.appendChild($fragment);

            }else{
                // console.log("Error");
                let message = xhr.statusText || "Ocurrio un error"
                $olXhr.innerHTML = `Error ${xhr.status}: ${message}`
            }

            // console.log("Este Mensaje Cargar de Cualquier Forma");
        });

        xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

        xhr.send();
})();


// API Fetch

(() =>{
        const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

        fetch("https://jsonplaceholder.typicode.com/user").then((res)=>{
            console.log(res);
            return res.ok == true ? res.json() : Promise.reject(res);
        }).then((json)=>{
                console.log(json);
                json.forEach(element => {
                   const $li = document.createElement("li");
                   $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                   $fragment.appendChild($li)
                });
                $fetch.appendChild($fragment);


        }).catch((err)=>{
            console.log(err);
            $fetch.innerText = `Error ${err.status}`

        }).finally(() =>{
            console.log("Esto se ejecutara indepedientemente del resultado de la promesa Fetch");
        });
})();