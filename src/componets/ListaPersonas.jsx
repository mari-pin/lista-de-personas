import {useState} from 'react';
const ListaPersonas = () =>{
    const [arrPersonas, setArrPersonas] = useState([
        {id:1, nombre: 'juan', apellidos:'perez', edad: 32, },
        {id:2, nombre: 'ana', apellidos:'lopez', edad: 39, },
        {id:3, nombre: 'noa', apellidos:'ibañez', edad: 99, }
    ]);

    const borrarPersona = (pId) => {
      /*   esto es la opcion para mostrar por indice 
      //copia de ARRAY
        const arrPersonasCopia = [...arrPersonas];
        //Recupero el indice
        const index = arrPersonasCopia.findIndex(persona => persona.id === pId);
        // borro el elemento del array
        arrPersonasCopia.splice(index,1);
        setArrPersonas(arrPersonasCopia); */

        //esta opcion es para filtrar por id tambien es valida
        const arrFiltrado = arrPersonas.filter(persona => persona.id !== pId);
        setArrPersonas(arrFiltrado);

    }

    return <div>
        <ul>
            {/* esto huele a bucle y nos facilitaria el trabajo 
            <li>{arrPersonas[0].nombre}</li>
            <li>{arrPersonas[1].nombre}</li>
            <li>{arrPersonas[2].nombre}</li>*/}

            {/* el map siempre develve una funcion anonima */}
            {arrPersonas.map( persona =>{
                return<li key = {persona.id} onClick = {(e)=>borrarPersona(persona.id)}>{/* le ponemos un id a cada objeto del array para que sean unicos y luego lo utilizamos esto se uas mucho con las litas para no repetir objetos */}
                      {persona.nombre} 
                      {persona.apellidos}
                      {persona.edad}
                     </li>
             } )}

        </ul>
    </div>

}
export default ListaPersonas;