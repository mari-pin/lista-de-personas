import {useState} from 'react';

const MostrarCosas = ()=> {

    const [mostrar, setMostrar] = useState(true);

    const cambioMostrar = () =>{
       setMostrar(!mostrar);//accion contarria de la que tenia
    }
/* 2º OPCION es crear una variable k en funcion del contenido coge una opcion o coge otra */
   /*  let contenido = null;
    if(mostrar){
        contenido = <p>Parrafo que se muestra o se oculta</p>; 
    } */
    return(
        <div>

            <p>{mostrar.toString()}</p>
            <button onClick={cambioMostrar}>mostrar o no </button>
        {/* esta es la opcion mas limpia */}
        {mostrar && <p>Parrafo que se muestra o se oculta</p>}


           {/*  {contenido} este contenido va con el if de arriba y aqui llamamamos a la variable creada mas arriba  */}

        {/* esto es 1º opcion para hacerlo dentro del componente */}
           {/*  {
             //condicion
            mostrar?
            //esto se muestra si la condicion es true
            <p>Parrafo que se muestra o se oculta</p> 
            //esto es lo que se muestra si es false
            : null 
            } */}
            
        </div>
    )

}
export default MostrarCosas;