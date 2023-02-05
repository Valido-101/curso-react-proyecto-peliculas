export const GuardarEnStorage = (clave, elemento) => {

    //Conseguir los elementos que ya tenemos en el local storage
    let elementos = JSON.parse(localStorage.getItem(clave));

    //Comprobar si es un array
    if (Array.isArray(elementos)) {
        //Añadir elemento nuevo
        elementos.push(elemento);
    }else{
        //Crear un array con la nueva peli
        elementos = [elemento];
    }

    //Guardar en el local storage
    localStorage.setItem(clave, JSON.stringify(elementos));

    //Devolver objeto guardado
    return elemento;
}