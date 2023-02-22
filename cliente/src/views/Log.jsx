function LogIn() {
	return (
		<div className="contenedor-formulario">
		  <div className="logo">
				<img src="../src/assets/logo.png" alt="" />
			</div>
			<div className="formulario">
				<p className="titulo my-2">Inicia sesión</p>
				<div className="grupo-inputs">
					<input type="text" id="usuario" />
					<label htmlFor="usuario">Usuario</label>
				</div>
				<div className="grupo-inputs">
					<input type="password" id="contraseña" />
					<label htmlFor="contraseña">Contraseña</label>
				</div>
				<a href="" className="texto-link">No tengo cuenta</a>
				<button className="btn-flat primario ">¡Listo!</button>
			</div>
		</div>
	);
}
function SingIn() {
	return (
		<div className="contenedor-formulario">
		  <div className="logo">
				<img src="../src/assets/logo.png" alt="" />
			</div>
			<div className="formulario">
				<p className="titulo my-2">Crea tu cuenta</p>
				<div className="grupo-inputs">
					<input type="text" id="usuario" />
					<label htmlFor="usuario">Usuario</label>
				</div>
				<div className="grupo-inputs">
					<input type="password" id="contraseña" />
					<label htmlFor="contraseña">Contraseña</label>
				</div>
				<a href="" className="texto-link">Ya tengo una cuenta</a>
				<button className="btn-flat primario ">¡Listo!</button>
			</div>
		</div>
	);
}

export {LogIn, SingIn}