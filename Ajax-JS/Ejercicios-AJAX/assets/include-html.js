
document.addEventListener("DOMContentLoaded", e => {
            const incluirHTML = (el, url) => {
                    const xhr = new XMLHttpRequest()

                    xhr.addEventListener("readystatechange", e => {
                        if (xhr.readyState !== 4) return

                        if (xhr.status >= 200 && xhr.status < 300) {
                            el.outerHTML = xhr.responseText
                        }else{
                            el.outerHTML = xhr.statusText;
                        }
                    })

                    xhr.open("GET", url)
                    xhr.setRequestHeader("Content-Type", "text/html; charset=utf-8")
                    xhr.send()
            }

            let data = document.querySelectorAll("[data-include]");

            data.forEach(ele => incluirHTML(ele, ele.dataset.include))
})


// document.addEventListener("DOMContentLoaded", e => {
//     const includeHTML = (el, url) => {
//             const xhr = new XMLHttpRequest();

//             xhr.addEventListener("readystatechange", e => {
//                     if (xhr.readyState !== 4) return

//                     if (xhr.status >= 200 && xhr.status < 300) {
//                         el.outerHTML = xhr.responseText;
//                     }else{
//                         let mensaje = xhr.statusText || "Error al cargar el archivo, verifica que estes haciendo la peticion por http o https";
//                         el.outerHTML = `<h2><b> Error: ${xhr.status}, ${xhr.statusText}. ${mensaje} </b></h2>`;
//                     }
//             })
//                     xhr.open("GET", url);
//                     xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
//                     xhr.send();
//          }

//             document.querySelectorAll("[data-include]").forEach(el => includeHTML(el, el.getAttribute("data-include")))


// })