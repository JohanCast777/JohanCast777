const Productos = require("./Productos")

class Carrito {
    constructor(Cliente, cantidad, codigo) {
        this.Cliente = Cliente.nombre + ' --- ' + Cliente.nit
        this.cantidad = cantidad
        this.codigo = codigo
        this.Productos = []
        if (cantidad > Productos.Cantidad) {
            console.log(`No hay productos suficientes`)
        }
    }

    agregarproducto(productos) {
        this.Productos.push(productos)
    }

}



module.exports = Carrito;