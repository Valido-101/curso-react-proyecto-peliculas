import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('');

  const buscarPeli = (e) => {
    //crear estado y actuaizarlo
    setBusqueda(e.target.value)

    //filtrar para buscar coincidencias
    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase())
    });

    if (busqueda.length <= 1 || pelis_encontradas <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
    }

    //actualizar estado del listado con lo que he filtrado
    setListadoState(pelis_encontradas);
  }

  return (
    <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>
        <form>
            <input type="text" 
                  id="search_field"
                  name="busqueda"
                  autoComplete='off'
                  value={busqueda}
                  onChange={buscarPeli} />
            <button id="search">Buscar</button>
        </form>
    </div>
  )
}
