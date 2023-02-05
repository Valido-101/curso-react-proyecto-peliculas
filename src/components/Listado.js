import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

    //const [listadoState, setListadoState] = useState([]);
    const [editar, setEditar] = useState(0);

    useEffect(() => {

        console.log('Componentes del listado de pelis cargado')

        conseguirPeliculas();
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);

        return peliculas;
    }

    const borrarPeli = (id) => {
        //Conseguir películas almacenadas
        let pelis_almacenadas = conseguirPeliculas();

        //Filtrar esas películas para que se elimine la que quiero
        let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

        //Actualizar estado del listado
        setListadoState(nuevo_array_peliculas);

        //Actualizar los datos en el local storage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas));
    }

  return (
    <>
        {listadoState != null ? 
            listadoState.map(peli => {
                return (<article key={peli.id} className="peli-item">
                        <h3 className="title">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}</p>

                        <button className="edit" onClick={() => {setEditar(peli.id)}}>Editar</button>
                        <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

                        {/*aparece formulario edición*/}
                        {editar === peli.id && (
                            <Editar/>
                        )}

                    </article>);})
            :
            <h2>No hay películas surmano</h2>

        }
        
    </>
  )
}
