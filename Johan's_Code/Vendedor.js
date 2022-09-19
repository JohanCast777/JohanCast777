const Usuario = require('./Usuario')
class Vendedor extends Usuario {

    constructor(nit, nombre, contraseña) {
        super(nit, nombre, contraseña)
        this._vendedor = []
    }



    agregarvendedor(vendedoor) {
        this._vendedor.push(vendedoor)
    }

    observar_catalogo(catalogo) {
        return this._catalogo = catalogo
    }
}
module.exports = Vendedor;