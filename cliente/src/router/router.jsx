import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from "../views/App";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
