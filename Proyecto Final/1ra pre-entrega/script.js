const products = [
    {id:1, name:"PIZZA MUZZARELLA", price: 800, stock:10},
    {id:2, name:"PIZZA NAPOLITANA", price: 1000, stock:10},
    {id:3, name:"PIZZA DE RUCULA", price: 900, stock:10},
    {id:4, name:"PIZZA FUGAZZETA", price: 1050, stock:10},
    {id:5, name:"PIZZA ESPECIAL", price: 1100, stock:10},
    {id:6, name:"PIZZA CON PALMITOS", price: 1100, stock:10},
    {id:7, name:"PIZZA CON JAMON", price: 900, stock:10}
]

const cupones = [
    {name: "PIZZACODER", apply: false},
]

const cart = [];

class ProductCart{
    constructor(obj, qty){
        this.id = obj.id,
        this.name = obj.name,
        this.price = obj.price,
        this.quantity = qty
    }
}

const addProductToCart = (id, quantity=1) =>{
    const product = products.find(p => p.id == id)
    if(!product){
        return "El producto no existe";
    }
    if(product.stock <= quantity){
        return "No hay suficiente stock";
    }

    const productCart = cart.find(p => p.id == id);
    if(productCart){
        productCart.quantity += quantity
    }
    else{
        cart.push((new ProductCart(product, quantity)))
    }

    product.stock -= quantity;

    return cart;
}


const delProductToCart = (id, qty=1) =>{
    const product = cart.find((p) => p.id == id);
    if(!product){
        return "El producto no existe en el carrito"
    }

    product.quantity -= qty;
    

    if(product.quantity < 1){
        const idx = cart.findIndex(p => p.id == id);
        cart.splice(idx,1);


        console.log(`Producto ${product.name} eliminado del carrito`);
    }

    const actualizarStock = products.find((p) => p.id == id);

    if(actualizarStock){
        actualizarStock.stock += qty;
    }

    return cart;
}
const addCupon = (cupon) =>{
    const cuponFound = cupones.find(c => c.name == cupon && !c.apply);
    if(!cuponFound){
        return "El cupon no fue encontrado";
    }

    cuponFound.apply = true;

    cart.forEach((p) => p.price = p.price * 0.85);
    //15% DE DESCUENTO
    return cart;
}

const precioTotal = () =>{
    const suma = cart.reduce((suma, p) => suma + (p.price * p.quantity), 0);
    return `Total: ${suma}`
}

const searchProduts = (product) =>{
    const productsFounds = products.filter(p => p.name.includes(product));
    if(productsFounds.length == 0){
        return "No existen productos que coincidan con ese nombre en la pagina";
    }

    return productsFounds;
}

console.table(addProductToCart(2,4));
console.table(addProductToCart(1,5));
console.table(addProductToCart(7,3));
console.table(delProductToCart(7,3));
console.table(products)
const cupon = prompt("Ingrese su cupon de descuento").toUpperCase();
console.table(addCupon(cupon));
console.table(precioTotal());
const inputProd = prompt("Ingrese el nombre del producto que desea buscar").toUpperCase();
console.table(searchProduts(inputProd));
