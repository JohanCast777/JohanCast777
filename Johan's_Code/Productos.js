class Productos {
    constructor(Codigo_producto, Precio, Nombre_producto, Categoria, Cantidad) {
        this._Codigo_producto = Codigo_producto
        this._Precio = Precio
        this._Nombre_producto = Nombre_producto
        this._Categoria = Categoria.n_categoria
        this._Cantidad = Cantidad
    }
}
module.exports = Productos;