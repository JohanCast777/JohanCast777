const Usuario = require('./Usuario')
class Cliente extends Usuario {
    constructor(nit, nombre, contraseña) {
        super(nit, nombre, contraseña)
        this._cliente = []
    }
    _cliente = []
    agregarcliente(cliente) {
        this._cliente.push(cliente)
    }
}
module.exports = Cliente;