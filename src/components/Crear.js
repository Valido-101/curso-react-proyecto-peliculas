import React, { useState } from 'react'

export const Crear = () => {

    const tituloComponente = "Añadir película";
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });
    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear objeto de película a guardar
        let peli = {
            id: new Date().getTime(),
            titulo: titulo,
            descripcion: descripcion
        }

        //Guardar estado
        setPeliState(peli);

        //Guardar en almacenamiento local
        guardarEnStorage(peli);
    }

    const guardarEnStorage = peli => {

        //Conseguir los elementos que ya tenemos en el local storage
        let elementos = JSON.parse(localStorage.getItem("pelis"));

        //Comprobar si es un array
        if (Array.isArray(elementos)) {
            //Añadir elemento nuevo
            elementos.push(peli);
        }else{
            //Crear un array con la nueva peli
            elementos = [peli];
        }

        //Guardar en el local storage
        localStorage.setItem("pelis", JSON.stringify(elementos));

        //Devolver objeto guardado
        return peli;
    }

  return (
    <div className="add">

        <h3 className="title">{tituloComponente}</h3>

        <strong>
            {(peliState.titulo && peliState.descripcion) && "Has creado la película: " + titulo}
        </strong>

        <form onSubmit={conseguirDatosForm}>
            <input 
                type="text" 
                id="titulo" 
                name="titulo"
                placeholder="Titulo" />
            <textarea 
                id="descripcion"
                name="descripcion" 
                placeholder="Descripción"></textarea>
            <input 
                type="submit" 
                id="save" 
                value="Guardar" />
        </form>

    </div>
  )
}
