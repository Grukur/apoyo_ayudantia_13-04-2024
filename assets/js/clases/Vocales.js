export default class Vocales {
    constructor(nombre, rango, comentario, img, sonido){
        this._nombre = nombre;
        this._rango = rango;
        this._comentario = comentario;
        this._img = img;
        this._sonido = sonido;
    }

    get nombre(){
        return this._nombre;
    }

    get rango(){
        return this._rango;
    }

    get comentario(){
        return this._comentario;
    }

    get img(){
        return this._img;
    }

    get sonido(){
        return this._sonido;
    }

}