import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import http from "../http-common";
import { Contexto_Funciones } from "../context/contextoFunciones";

export default function CrearPublicacion() {
	const { modal, setModal, activo, listaPost, cat } = useContext(Contexto_Funciones);
	const [head, setHead] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [img, setImg] = useState({ preview: "", data: "" });
	const cambioImg = (e) => {
		const img2 = {
			preview: URL.createObjectURL(e.target.files[0]),
			data: e.target.files[0],
		};
		setImg(img2);
	};
	const enviarImg = (e) => {
		e.preventDefault();
		const data = {
			category,
		};
		http
			.post("/dupcategory", data)
			.then((response) => {
				setCategory(response.data[0].idCat);
			})
			.catch((e) => {
				console.log(e);
			});
		let formData = new FormData();
		formData.append("file", img.data);
		formData.append("head", head);
		formData.append("description", description);
		formData.append("category", category);
		formData.append("autor", activo.idUsers);
		fetch("http://localhost:8081/api/aggpublications", {
			method: "POST",
			body: formData,
		})
		.then((response) => response.json())
		.then((data) => {
			if (!data.err) {
				listaPost();
				setCategory("");
				setDescription("");
				setHead("");
				setImg({ preview: "", data: "" });
			} else {
				console.log(data.err)
			}
		})
		.catch((error) => {
			console.log('Error:', error);
		});
	};
	if (modal) {
		return (
			<div className="modal-bg">
				<div className="modal-container">
					<div className="modal">
						<div className="col-12">
							<button
								className="btn-icon float-right m-0"
								onClick={(e) => setModal(false)}
							>
								<FontAwesomeIcon icon="fa-solid fa-times" />
							</button>
						</div>
						<div className="col-12 col-lg-6">
							<div className="contenedor-img">
								<img src={img.preview} alt="" />
							</div>
						</div>
						<div className="col-lg-6">
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
							<div className="grupo-inputs">
								<input
									type="text"
									id="titulo"
									value={head}
									onChange={(e) => setHead(e.target.value)}
								/>
								<label htmlFor="titulo">Titulo</label>
							</div>
							<div className="grupo-inputs">
								<input
									type="text"
									multiple
									id="categoria"
									list="categorias"
									value={category}
									onChange={(e) => setCategory(e.target.value.toUpperCase())}
								/>
								<label htmlFor="categoria">Categoría</label>
								<datalist id="categorias">
									{cat.map((c) => (
										<option key={c.idCat} value={c.nameCat}>
											{c.nameCat}
										</option>
									))}
								</datalist>
							</div>
							<div className="grupo-inputs">
								<textarea
									id="descripcion"
									cols="30"
									rows="10"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								></textarea>
								<label htmlFor="descripcion">Descripción</label>
							</div>
							<div className="col-available">
								<div className="d-flex flex-column flex-lg-row">
									<button
										className="btn-outline col-available"
										onClick={(e) => setModal(false)}
									>
										<FontAwesomeIcon icon="fa-solid fa-times" />
										<span className="px-1">Cancelar</span>
									</button>
									<button
										className="btn-outline col-available"
										onClick={(e) => setModal(false)}
									>
										<FontAwesomeIcon icon="fa-solid fa-trash" />
										<span className="px-1">Eliminar</span>
									</button>
									<button className="btn-flat primario col-available" onClick={enviarImg}>
										<FontAwesomeIcon icon="fa-solid fa-check" />
										<span className="px-1">Publicar</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
