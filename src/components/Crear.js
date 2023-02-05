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

        setPeliState(peli);

        console.log(peliState);
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
