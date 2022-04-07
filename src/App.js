// import logo from './logo.svg';
import './App.css';
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import Home from "./components/pages/Home";
// import Cupcakes from "./components/pages/Cupcakes";
import "./styles/styles.scss";

import Servicios from "./components/pages/Servicios";
import Productos from "./components/pages/Productos";
import Portafolio from "./components/pages/Portafolio";
import Clientes from "./components/pages/Clientes";
import Nosotros from "./components/pages/Nosotros";
import Contacto from "./components/pages/Contacto";

import Servicios_uno from "./components/pages/Servicios_uno";
import Servicios_dos from "./components/pages/Servicios_dos";
import Servicios_tres from "./components/pages/Servicios_tres";

import Productos_uno from "./components/pages/Productos_uno";
import Productos_dos from "./components/pages/Productos_dos";
import Productos_tres from "./components/pages/Productos_tres";

import Portafolio_uno from "./components/pages/Portafolio_uno";
import Portafolio_dos from "./components/pages/Portafolio_dos";
import Portafolio_tres from "./components/pages/Portafolio_tres";

//https://v5.reactrouter.com/web/guides/quick-start
//yarn add react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => (
  // rc95 06/04/2022 19:11 - Building for Relative Paths
  // https://codeburst.io/deploying-and-hosting-a-react-app-on-an-apache-server-b7121dffb07a
  <Router
    basename={"/react-node-lady-front"}
  >
    <Header />
    <Routes>
      {/* <Route path="/cupcakes" element={<Cupcakes />} /> */}
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/portafolio" element={<Portafolio />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/contacto" element={<Contacto />} />

      <Route path="/servicios-uno" element={<Servicios_uno />} />
      <Route path="/servicios-dos" element={<Servicios_dos />} />
      <Route path="/servicios-tres" element={<Servicios_tres />} />

      <Route path="/productos-uno" element={<Productos_uno />} />
      <Route path="/productos-dos" element={<Productos_dos />} />
      <Route path="/productos-tres" element={<Productos_tres />} />

      <Route path="/portafolio-uno" element={<Portafolio_uno />} />
      <Route path="/portafolio-dos" element={<Portafolio_dos />} />
      <Route path="/portafolio-tres" element={<Portafolio_tres />} />

      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
