import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect, useSelector} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress'

import { useAlert } from 'react-alert';
import EditarCategoria from './EditarCategoria';
import VerLibros from './VerLibros';

import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ClassIcon from '@material-ui/icons/Class';
import FormatList from '@material-ui/icons/FormatListNumbered';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ListAltIcon from '@material-ui/icons/ListAlt';

function CategoriaList () {

    const alert = useAlert()
    const state = useSelector( state => state.categoria )
    const [categoriasHtml, setCategoriasHtml] = useState();
    const [categorias, setCategorias] = useState();
    const [reload, setReload] = useState(0);
    const [editar, setEditar] = useState("");
    const [verLibros, setVerLibros] = useState("");

//     const handleReset = (e) => {
//         e.preventDefault();

//         async function resetCategoria() {
//             await axios ({
//                 method: 'put',
//                 url: url +`c.reset`,
//                 headers: header
//             })
//             .then((res) => {
//                 alert.success('Se han reseteado los parametros');
//                 setReload(reload + 1);
//             })
//             .catch((error) => {
//                 console.error(error)
//             });
//         }

//         resetCategoria();
//     } 


//     const handleDelete = (e) => {
//         e.preventDefault()

//         async function deleteCategoria() {
//             const opcion = window.confirm('¿Seguro que quieres eliminar?')
            
//             if (opcion == true) {
//                 await axios({
//                         method: 'delete',
//                         url: url + `categoria/` + e.target.value,
//                         headers: header
//                     })
//                     .then((res) => {
//                         alert.success('Se ha borrado correctamente')
//                         setReload(reload + 1)

//                     })
//                     .catch((error) => {
//                         console.error(error)
//                         alert.error('¡No se puede borrar! Esta categoria tiene libros asociados!')
//                     });
//             }
//         }

//         deleteCategoria();
//     }


//     const handleEditar = (e) => {
// 		e.preventDefault()
		
// 			async function editarCategoria (e) {
// 				setEditar(<EditarCategoria id={e.target.value} />);
// 			}

// 		editarCategoria(e);
//         const modal = document.querySelector(".modal");
// 		modal.style = "opacity: 1;";          
// 	}

//     const handleVerLibros = (e) => {
//         e.preventDefault();
//         const id = e.target.value;

//         async function getLibrosCat (id){
//                 await axios.get(url + `libro`, {headers: header}
//                 )
//                 .then((res) => {
//                     const lista = res.data.respuesta;
//                     const getLibroCategoria = (id) => lista.filter( (libro) => libro.categoria_id == id);
//                     const libroC = getLibroCategoria(id);

//                     if(libroC.length < 1){
//                         alert.show('La categoria no tiene libros asociados')
//                     }else{
//                         const listaAux = libroC.map((libro, index)=>(
//                             ` ${index + 1} ${JSON.stringify(libro.nombre)}`
//                         ))
//                         listaAux.map((libro) => {alert.success(libro)})                  
//                     }}
//                 )
//                 .catch((error) => {
//                    console.log(error)
//                 });
//             }

//         getLibrosCat(e.target.value);
// }


    useEffect(() => {

        setCategorias(state.payload)


    }, [])


    useEffect(() => {

        if (categorias != undefined) {

            const categoriaAux = categorias.map((categoria, index) => (
                <tr key={index}>
	            	<td><p><strong>{index + 1}</strong></p></td> 
	                <td><p>{categoria.nombre}</p></td>
	            	<td><p>{categoria.id}</p></td>
                    <td><button className="center" value= {categoria.id}>V</button></td>
	            	<td><button className="center" value= {categoria.id}>X</button></td>
                    <td><button className="center" value= {categoria.id}>E</button></td>
	            </tr>
            ))

            setCategoriasHtml(categoriaAux);
        }

    }, [categorias])


    return (
        <div className='contentList'>
			<h2>Lista de categorias</h2>
            <Tooltip title= "Reset ID +">
                <button className="reset" >
                    <AutorenewIcon />
                </button>
            </Tooltip>
            {
				(state.loaded == false)
				?
					<>
						<br/>
						<CircularProgress id="circle" color="primary" size="70px" thickness= "7" />	
					</>
				:
                <table>
                    <thead>
                        <tr>
                            <th>
                                <Tooltip title= "Numero">
                                    <FormatList />
                                </Tooltip>
                            </th>
                            <th>Nombre</th>
                            <th>
                                <Tooltip title= "Categoria ID">
                                    <ClassIcon />
                                </Tooltip>                          
                            </th>
                            <th className="funcion">
                            <Tooltip title= "Ver Libros">
                                    <ListAltIcon />
                                </Tooltip>
                            </th>  
                            <th className="funcion">
                                <Tooltip title= "Borrar">
                                    <DeleteIcon />
                                </Tooltip>
                            </th>
                            <th className="funcion">
                                <Tooltip title= "Editar">
                                    <EditIcon />
                                </Tooltip>
                            </th>  
                        </tr>
                    </thead>
                    <tbody>
                        {categoriasHtml}
                    </tbody>
                </table>
            }
            <div className="modal">
				{/* {editar} */}
			</div>
		</div>
    );
}


export default connect(null, null)(CategoriaList);