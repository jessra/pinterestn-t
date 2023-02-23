import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "../views/Inicio";
import Perfil from "../views/Perfil";
import {LogIn, SingIn} from "../views/Log";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Inicio />} />
				<Route exact path="/Image/:id" element={<Inicio />} />
				<Route exact path="/Favoritos" element={<Inicio />} />
				<Route exact path="/Perfil" element={<Perfil />} />
				<Route exact path="/LogIn" element={<LogIn />} />
				<Route exact path="/SingIn" element={<SingIn />} />
			</Routes>
		</BrowserRouter>
	);
}
