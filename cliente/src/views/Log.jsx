import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";
import http from "../http-common";

function LogIn() {
	const { iniciarCuenta } = useContext(Contexto_Funciones);
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	return (
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
				<a href="/SingIn" className="texto-link">
					No tengo cuenta
				</a>
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
	);
}
function SingIn() {
	const { setActivo, listaUsurios, listaActivo } = useContext(Contexto_Funciones);
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
    let formData = new FormData();
		formData.append("file", img.data);
    formData.append("name", user);
    formData.append("pass", pass);
		http
		.post("http://localhost:8081/api/aggusers", formData)
		.then((response) => {
			if (response.data.err) {
				console.log(response.data.err)
			} else {
				localStorage.setItem('pinterestnt', JSON.stringify(response.data));
				listaActivo()
				listaUsurios()
				window.location.href = '/';
			}
		})
		.catch((error) => {
			console.log('Error:', error);
		});
  }
	return (
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
				<a href="/LogIn" className="texto-link">
					Ya tengo una cuenta
				</a>
				<button className="btn-flat primario " onClick={enviarImg}>
					¡Listo!
				</button>
			</div>
		</div>
	);
}

export { LogIn, SingIn };
