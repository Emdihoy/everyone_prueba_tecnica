import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/registro.css";

export const Registro = () => {
	const { store, actions } = useContext(Context);

	const [nombre, setNombre] = useState('');
	const [correo, setCorreo] = useState('');

	return (
		<>
			<div className="main col-12 text-center">
				<form className="g-3 ">
						<label htmlFor="text" className="visually-hidden"></label>
						<input onChange={(e) =>setNombre((e).target.value)} type="text" className="botonRegistro form-control" id="exampleFormControlInput1" placeholder="Escribe tu nombre (obligatorio)" />
						<label htmlFor="staticEmail2" className="visually-hidden"></label>
						<input onChange={(e) =>setCorreo((e).target.value)} type="email" className="botonRegistro form-control" placeholder="Correo (obligatorio)" />
						<label htmlFor="staticEmail2" className="visually-hidden">Apellidos</label>
						<input type="email" className="botonRegistro form-control" placeholder="Apellidos" />
						<label htmlFor="staticEmail2" className="visually-hidden">Telefono</label>
						<input type="email" className="botonRegistro form-control" placeholder="Telefono" />
						<div className="dropdown">
							<label htmlFor="staticEmail2" className="visually-hidden">Vehiculo que desea probar</label>
							<button value="" type="button" data-bs-toggle="dropdown" aria-expanded="false"className="desplegable btn dropdown-toggle text-start" placeholder="Vehiculo que desea probar">Vehiculo que desea probar</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">IVECO Daily</a></li>
								<li><a className="dropdown-item" href="#">IVECO Eurocargo</a></li>
								<li><a className="dropdown-item" href="#">IVECO S-Way</a></li>
								<li><a className="dropdown-item" href="#">IVECO T-Way</a></li>
								<li><a className="dropdown-item" href="#">IVECO Stralis</a></li>
								<li><a className="dropdown-item" href="#">IVECO Trakker</a></li>
							</ul>
						</div>
						<label htmlFor="staticEmail2" className="visually-hidden">Dia de prueba</label>
						<input type="email" className="botonRegistro form-control" placeholder="Dia de prueba" />
						<label htmlFor="staticEmail2" className="visually-hidden">Contraseña</label>
						<input type="email" className="botonRegistro form-control" placeholder="Contraseña" />
						<div className="form-check">
							<input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" />
							<label className="form-check-label " htmlFor="validationFormCheck2">He leido y acepto las politicas de privacidad</label>
						</div>
						<button className="botonFormulario mb-3" type="button" onClick={() => actions.crearUsuario(nombre, correo)}>Crear cuenta</button>
				</form>
			</div>
		</>
	);
};