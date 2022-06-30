const productoCompras = []

let productoAgregar = prompt("Ingrese su producto para agregar a la lista de compras").toLowerCase()


while(productoAgregar != "esc") {
    productoCompras.push(productoAgregar)
    console.table(productoCompras)
    productoAgregar = prompt("Ingrese otro producto para agregar a la lista").toLowerCase()
}