import Tipos from "./clases/Tipos.js";
import data from "./data.js";

let vocales = [];

const cardCreate = () => {
    
}
document.getElementById('btnRegistrar').addEventListener('click', () =>{
    try {
        const nombre = document.getElementById('vocal').value;
        const rango = document.getElementById('rango').value;
        const comentario = document.getElementById('comentarios').value;
        if(nombre && rango && comentario){
            let vocal = new Tipos(nombre, rango, comentario);
            vocales.push(vocal);
            cardCreate();
        } else{
            alert('Faltan datos')
        }
    } catch (error) {
        console.log(error)
    }
});