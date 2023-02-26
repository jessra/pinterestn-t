import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";
import { Link } from "react-router-dom";
import Alerts from "../components/Alert";
import http from "../http-common";

function LogIn() {
	const { iniciarCuenta } = useContext(Contexto_Funciones);
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	return (
		<>
			<div className="contenedor-formulario">
				<div className="logo">
					<img src="../src/assets/logo.png" alt="" />
				</div>
				<div className="formulario">
					<p className="titulo text-center my-2">Inicia sesión</p>
					<div className="grupo-inputs">
						<input
							type="text"
							id="usuario"
							onChange={(e) => setUser(e.target.value)}
							required
						/>
						<label htmlFor="usuario">Usuario</label>
					</div>
					<div className="grupo-inputs">
						<input
							type="password"
							id="contraseña"
							onChange={(e) => setPass(e.target.value)}
							required
						/>
						<label htmlFor="contraseña">Contraseña</label>
					</div>
					<Link to="/SingIn" className="texto-link">
						No tengo cuenta
					</Link>
					<button
						className="btn-flat primario "
						onClick={(e) => {
							iniciarCuenta(user, pass);
						}}
					>
						¡Listo!
					</button>
				</div>
			</div>
			<Alerts></Alerts>
		</>
	);
}
function SingIn() {
	const { listaUsurios, listaActivo, Alert } = useContext(Contexto_Funciones);
	const [user, setUser] = useState('')
	const [pass, setPass] = useState('')
	const [img, setImg] = useState({preview: '', data: ''})
  const cambioImg = (e) => {
    const img2 = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImg(img2)
  }
  const enviarImg = (e) => {
    e.preventDefault();
		if (user && pass && img.data) {
			let formData = new FormData();
			formData.append("file", img.data);
			formData.append("name", user);
			formData.append("pass", pass);
			let header = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};
			http
			.post("http://localhost:8081/api/aggusers", formData, header)
			.then((response) => {
				if (response.data.err) {
					console.log(response.data.err)
					if (response.data.err.errors[0].message) {
						Alert('Ha sucedido un problema. ' + response.data.err.errors[0].message, false)
					} else {
						Alert('Ha sucedido un problema', false)
					}
				} else {
					localStorage.setItem('pinterestnt', JSON.stringify(response.data));
					listaActivo()
					listaUsurios()
					window.location.href = '/';
				}
			})
			.catch((error) => {
				console.log('Error:', error);
				Alert('Ha sucedido un problema', false)
			});
		} else {
			Alert('Por favor rellena todos los campos', false)
		}
  }
	return (
		<>
			<div className="contenedor-formulario">
				<div className="logo">
					<img src="../src/assets/logo.png" alt="" />
				</div>
				<div className="formulario">
					<p className="titulo text-center my-2">Crea tu cuenta</p>
					<div className="grupo-inputs">
						<input
							type="text"
							id="usuario"
							onChange={(e) => setUser(e.target.value)}
							required
						/>
						<label htmlFor="usuario">Usuario</label>
					</div>
					<div className="grupo-inputs">
						<input
							type="password"
							id="contraseña"
							onChange={(e) => setPass(e.target.value)}
							required
						/>
						<label htmlFor="contraseña">Contraseña</label>
					</div>
					<div className="grupo-inputs file">
						<input
							type="file"
							id="image"
							name="image"
							accept=".jpg, .jpeg, .png"
							className="wh-100"
							onChange={cambioImg}
							required
						/>
						<label htmlFor="image">
							<FontAwesomeIcon icon="fa-solid fa-upload" />
							<span className="px-2">Subir imagen</span>
						</label>
					</div>
					<Link to="/LogIn" className="texto-link">
						Ya tengo una cuenta
					</Link>
					<button className="btn-flat primario " onClick={enviarImg}>
						¡Listo!
					</button>
				</div>
			</div>
			<Alerts></Alerts>
		</>
	);
}

export { LogIn, SingIn };
