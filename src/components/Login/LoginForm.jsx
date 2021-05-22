import React, {useState, useEffect} from 'react';
import { connect, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import { Fab } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import googleI from '../../assets/googleIcon.svg';
import { doLoginAction, doLoginDbAction } from '../../reducers/userDuck';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Registro from '../Registro/Registro';


function LoginForm ({ doLoginAction, doLoginDbAction}) {

	const history = useHistory();
	const state = useSelector(state => state.user)
	const [form, setForm] = useState({user:'',pass:''});

	const handleForm = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
		
	}
	
	useEffect(() => {
		if(state.loggedIn === true){
			history.push('/home');
		}
	}, [state.loggedIn])
	
    const handleSubmit = () => {
		doLoginDbAction(form);
	}


	return(
		<div className= "Logform">
			<h2>Ingresa a tu biblioteca</h2>
			{/*Formulario*/}
			<form action="Login">
				<label>User </label>
					<input type="text" name='user' placeholder="Usuario" onChange={ handleForm } /><br/>
				<label>Pass </label>
					<input id="input2" type="password" name='pass'placeholder="Contraseña" onChange={ handleForm }/><br/><br/>
			</form>
			{/*Botones*/}
			<div >
				<Button variant="outline-primary" size="lg" block onClick={ handleSubmit }>
					Login <PowerSettingsNewIcon fontSize="large"/>
				</Button>
				<Button variant="outline-light" size="lg" onClick={ doLoginAction } block>
					Login with Google <img id= "imgGoog" src={ googleI } />
				</Button>

				<Accordion  defaultActiveKey="1">
					<Card>
						<Accordion.Toggle className="login" as={Card.Header} eventKey="0">
							REGISTRATE
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
						<Card.Body className="accordion">
							<Registro />
						</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>	
			</div>
		</div>
	);
}

export default connect( null, { doLoginAction, doLoginDbAction } )( LoginForm );