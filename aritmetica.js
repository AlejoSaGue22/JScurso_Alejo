// function sumar(a,b){
//     return a + b;
// }

// function restar(a,b){
//     return a - b;
// }

// export const aritmetica = {
//         sumar,
//         restar
//     }

    console.log(document.getElementsByName('barc').value, 99);

    document.addEventListener("change", e => {
        console.log(e.target);
        console.log(e.target.value);
        
    })

    let cek = document.querySelectorAll(".check");

    cek.forEach(checkbox => {
        console.log(checkbox);
        
        checkbox.addEventListener("change", e => {
            console.log(e.target.checked);
        })
    })

    