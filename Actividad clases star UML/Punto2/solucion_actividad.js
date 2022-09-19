/*
Una agencia vendedora de autos desea un sistema computacional para administrar los datos de sus vehículos y clasificarlos por tipo. Todos los autos tienen los siguientes datos:
· Número de serie del motor.
· Marca.
· Año.
· Precio.
Los vehículos se clasifican en autos compactos, autos de lujo, camionetas y vagonetas. Para los autos y vagonetas, también es importante almacenar la cantidad de pasajeros; mientras que para las camionetas se debe controlar la capacidad de carga en kgs. y la cantidad de ejes y de rodadas. Modele este sistema con diagramas de clases en UML e instancie cada una de las clases, asignándole datos mediante sus respectivas propiedades. Agregue un constructor con parámetros a cada clase para inicializar sus datos e invoque el constructor de la clase base desde el constructor de cada clase derivada (no utilice constructores default).
Implemente la sobrescritura del método ToString() para mostrar los datos de cada tipo de auto.
NOTA: No se permiten componentes duplicados en las clases ni clases vacías (sin elementos).
*/

/*--------------------------AUTOS ---superclase--------------------------*/
class autos {
    constructor(nserie, marca, año, precio) {
            this._nserie = nserie;
            this._marca = marca;
            this._año = año;
            this._precio = precio;
        }
        //N SERIE
    get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        //MARCA
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        //AÑO
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
        //Precio
    get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
        precio = this.precio
    }
    completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
    }
}

let car = new autos(3245, 'Renauld', '2004', 50000)


/*--------------------------AUTOS COMPACTOS---subclase--------------------------*/
class autos_compactos extends autos {
    constructor(nserie, marca, año, precio, cantidad_de_pasajeros) {
            super(nserie, marca, año, precio)
            this._cantidad_de_pasajeros = cantidad_de_pasajeros
        }
        //N SERIE
    get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        //MARCA
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        //AÑO
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
        //Precio
    get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
            precio = this.precio
        }
        //Cantidad de pasajeros
    get cpa() {
        return this._cantidad_de_pasajeros = this._cantidad_de_pasajeros;
    }
    set cpa(cpa) {
            cpa = this._cantidad_de_pasajeros
        }
        //Completo
    completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
        console.log(this._cantidad_de_pasajeros = this._cantidad_de_pasajeros)
    }
}
let vehiculo1 = new autos_compactos(14526, 'Cherolet', '2019', 60000000, 4)


/*--------------------------AUTOS DE LUJO---subclase--------------------------*/

class autos_lujo extends autos {
    constructor(nserie, marca, año, precio, cantidad_de_pasajeros) {
            super(nserie, marca, año, precio)
            this._cantidad_de_pasajeros = cantidad_de_pasajeros
        }
        //N SERIE
    get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        //MARCA
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        //AÑO
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
        //Precio
    get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
            precio = this.precio
        }
        //Cantidad de pasajeros
    get cpa() {
        return this._cantidad_de_pasajeros = this._cantidad_de_pasajeros;
    }
    set cpa(cpa) {
            cpa = this._cantidad_de_pasajeros
        }
        //Completo
    completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
        console.log(this._cantidad_de_pasajeros = this._cantidad_de_pasajeros)
    }
}

let vehicle1 = new autos_lujo(123456, 'LAamborjini', '2020', 100000000, 2)

/*--------------------------CAMIONETAS---subclase--------------------------*/

class camionetas extends autos {
    constructor(nserie, marca, año, precio, capacidad_carga, cantidad_ejes, cantidad_rodadas) {
            super(nserie, marca, año, precio)
            this._capacidad_carga = capacidad_carga;
            this._cantidad_ejes = cantidad_ejes;
            this._cantidad_rodadas = cantidad_rodadas
        }
        //N SERIE
    get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        //MARCA
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        //AÑO
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
        //Precio
    get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
            precio = this.precio
        }
        //Capacidad de carga
    get cc() {
        return this._capacidad_carga = this._capacidad_carga;
    }
    set cc(cc) {
            cc = this._capacidad_carga
        }
        //Capacidad de ejes
    get ce() {
        return this._capacidad_ejes = this._capacidad_ejes;
    }
    set ce(ce) {
            ce = this._capacidad_ejes
        }
        //Capacidad de rodadas
    get cr() {
        return this._cantidad_rodadas = this._cantidad_rodadas;
    }
    set cr(cr) {
            cr = this._cantidad_rodadas
        }
        //Completo
    completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
        console.log(this._capacidad_carga = this._capacidad_carga)
        console.log(this._cantidad_ejes = this._cantidad_ejes)
        console.log(this._cantidad_rodadas = this._cantidad_rodadas)
    }
}

let camioneta1 = new camionetas(2563214, 'Toyota', '2022', 80000000, 1400, 'Cuatro', 1000)

/*--------------------------VAGONETAS---subclase--------------------------*/

class vagoneta extends autos {
    constructor(nserie, marca, año, precio, cantidad_de_pasajeros) {
            super(nserie, marca, año, precio)
            this._cantidad_de_pasajeros = cantidad_de_pasajeros
        }
        //N SERIE
    get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        //MARCA
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        //AÑO
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
        //Precio
    get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
            precio = this.precio
        }
        //Cantidad de pasajeros
    get cpa() {
        return this._cantidad_de_pasajeros = this._cantidad_de_pasajeros;
    }
    set cpa(cpa) {
            cpa = this._cantidad_de_pasajeros
        }
        //Completo
    completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
        console.log(this._cantidad_de_pasajeros = this._cantidad_de_pasajeros)
    }
}

let vagone = new vagoneta(152365, 'Volkswagen', '1995', 20000000, 8)


/*---------------------------impresiones---------------------------
console.log('_______________________________________________________________________')
car.completo();
console.log('_______________________________________________________________________')
vehiculo1.completo();
console.log('_______________________________________________________________________')
vehicle1.completo();
console.log('_______________________________________________________________________')
camioneta1.completo();
console.log('_______________________________________________________________________')
vagone.completo();
console.log('_______________________________________________________________________')
*/