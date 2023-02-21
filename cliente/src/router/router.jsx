import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "../views/Inicio";
import Perfil from "../views/Perfil";
import Log from "../views/Log";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Inicio />} />
				<Route exact path="/Perfil" element={<Perfil />} />
				<Route exact path="/Log" element={<Log />} />
			</Routes>
		</BrowserRouter>
	);
}
