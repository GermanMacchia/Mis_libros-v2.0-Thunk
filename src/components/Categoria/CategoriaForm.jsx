import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useAlert } from 'react-alert';
import { Fab } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function CategoriaForm () {

	const alert = useAlert();


	const [newPost, setNewPost] = useState(0);
	const [categoria, setCategoria] = useState({
		    nombre: " "
			})

	// const handleNuevacategoria = (e) => {
	// 	setCategoria({
	// 		nombre: e.target.value
	// 	});
	// }

	// const handleSubmit = (e) => {
	// 	e.preventDefault()

	// 	async function postCategoria () { 
	// 			await axios({
	// 			    method: 'post',
	// 			    url: url + `categoria`,
	// 			    data: categoria,
	// 			    headers: header
	// 			    })
	// 			.then((res) => {
	// 				alert.success('Nueva categoria agregada')
	// 				setNewPost(newPost + 1);
	// 				props.onSave(newPost);
	// 			})
	// 			.catch((error) => {
	// 			  console.error(error)
	// 			  alert.error('Categoria existente')
	// 			});
	// 		}
			
	// 	postCategoria ();
	// 	document.getElementById("Cregistro").reset();
	// }

	return(
			<div className= "homeform">
				<h2>Ingresar una categoria</h2>
					<form id="Cregistro">
						<label>Categoria</label><br/><br/>
						<input type="text"  placeholder="Nombre categoria"/><br/><br/>
						<Fab color="primary">
							<AddCircleIcon fontSize="large" type= "submit" />
						</Fab>		
					</form>
			</div>
		)

}


export default connect(null, null)(CategoriaForm);

