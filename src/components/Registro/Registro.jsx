import React, { useState } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { Fab } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Button from 'react-bootstrap/Button';

export default function Registro () {
	
	const alert = useAlert()
	const url = `https://mis-libros-bck.herokuapp.com/`;

	const [user, setUser] = useState({
		usuario: " ",
		clave: " ",
		email: " ",
		celu: " "
	})

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name] : e.target.value

		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		async function registro () {
			await axios.post(url + `registro`, user)
			    .then((res) => {
                    alert.success('Se ha Registrado correctamente')
                })
                .catch((error) => {
                    console.error(error)
                    alert.error('Nombre de usuario ya registrado')
                });
        }
        
        registro();
        document.getElementById("registro").reset()
	}


	return(
			<div className= "log">
				<form id="reg">
					<label>User </label>
					<input type="text" name="usuario"  onChange= {handleChange} placeholder="Nombre de usuario" /><br/>
					<label>Pass </label>
					<input id="input2" type="password" name="clave" onChange= {handleChange} placeholder="Ingrese una contraseña" /><br/>
					<label>Mail </label>
					<input id="input3" type="email" name="email" onChange= {handleChange} placeholder="Ingrese un email" /><br/>
					<label>Celu </label>
					<input type="text" name="celu" onChange= {handleChange} placeholder="Nro. de contacto"/><br/><br/>
					<Button variant="outline-success" size="lg" block onClick={ handleSubmit }>
						<AssignmentIcon fontSize="large" type= "submit" />
					</Button>
				</form>
			</div>
		);
}