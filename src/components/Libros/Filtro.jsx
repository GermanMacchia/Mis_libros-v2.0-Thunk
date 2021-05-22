import React, { useState, useEffect } from 'react'


export default function Filtro () {

    const [opcion, setOpcion] = useState();

    const handleChange = (e) => {

        setOpcion(e.value)
    }

    return(
        <>
        <form id="filtro">
            <select name="Filtrar" onChange={handleChange}  >
                <option value="todos" >Todos</option>
                <option value="filtrar">Prestados</option>
                <option value="biblioteca">En Biblioteca</option>
                <option value="Categoria">Categoria</option>     
            </select>
        </form>

        {
            (opcion == 'Categoria')?
                <form>
                    <option value="todos">Todos</option>
                    <option value="filtrar">Prestados</option>
                </form>
            :
            <h1></h1>
        }
        </>
    )
}


