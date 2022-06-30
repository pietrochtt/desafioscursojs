// const productoCompras = []

// let productoAgregar = prompt("Ingrese su producto para agregar a la lista").toLowerCase()


// while(productoAgregar != "esc") {
//     productoCompras.push(productoAgregar)
//     console.table(productoCompras)
//     productoAgregar = prompt("Ingrese otro producto para agregar a la lista").toLowerCase()
// }



const productoCompras = []

let productoAgregar = prompt("Si desea agregar productos hagalo con el signo +, + producto, si desea quitar hagalo con el signo -, mas producto").toLowerCase()
let indice = productoCompras.indexOf(productoEliminar)

if(productoAgregar != "esc" || productoAgregar != "-" + productoAgregar ) {
    productoCompras.push(productoAgregar)
    console.table(productoCompras)
    productoAgregar = prompt("Ingrese otro producto para agregar a la lista").toLowerCase()
} else if (indice >= 0) {
    productoCompras.splice(indice,1)
    console.table(productoCompras)
}