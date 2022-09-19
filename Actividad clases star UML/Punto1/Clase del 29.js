//---------------------------------------------------------------------------------------------------------

//                                      Actividad 1


class Publicacion{
    constructor(Titulo,Precio){
    this._Titulo=Titulo;
    this._Precio=Precio;
    }

    set Titulo(Titulo){
        this._Titulo=Titulo
    }

    get Titulo(){
        return this._Titulo= this._Titulo
    }

    get Titulo(){
        return this._Titulo= this._Titulo
    }

}

class Libro extends Publicacion{
    constructor(Titulo,Precio,NumPaguinas){
        super(Titulo,Precio);
        this._NumPaguinas=NumPaguinas;
    }

    set NumPaguinas(NumPaguinas){
        this._NumPaguinas=NumPaguinas
    }

    get NumPaguinas(){
        return this._NumPaguinas=this._NumPaguinas
    }

    get NumPaguinas(){
        return this._NumPaguinas=this._NumPaguinas
    }
}

class CD extends Publicacion{
    constructor(Titulo,Precio,NumPaguinas,TiempoRepro){
    super(Titulo,Precio,NumPaguinas);
    this._TiempoRepro=TiempoRepro;
    }

    set TiempoRepro(TiempoRepro){
        this._TiempoRepro=TiempoRepro
    }

    get TiempoRepro(){
        return this._TiempoRepro=this._TiempoRepro
    }

    get TiempoRepro(){
        return this._TiempoRepro=this._TiempoRepro
    }

    TotalResultado(){
        console.log('El Titulo del libro es:',ob3._Titulo);
        console.log('El Precio del libro es: ',ob3._Precio);
        console.log('El Titulo del 2° libro es:',ob4._Titulo);
        console.log('El Precio del 2° libro es:',ob4._Precio);
        console.log('El Numero de paginas del 2° libro es:',ob4._NumPaguinas);
        console.log('El Titulo del 3° libro es: ',ob5._Titulo);
        console.log('El Precio del 3° libro es: ',ob5._Precio);
        console.log('El Numero de las paguinas del 3° libro es: ',ob5._NumPaguinas);
        console.log('El Tiempo de reproduccion del 3° libro es: ',ob5._TiempoRepro);
    }
}

let ob3=new Publicacion ('OMGGGGG',100000);
let ob4=new Libro ('OMGNS',190000,90);
let ob5=new CD ('Fun',938208,32,60);
ob5.TotalResultado();