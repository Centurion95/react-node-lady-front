import { NavLink } from "react-router-dom";
// import '../../scripts/openMenu.js';

const Header = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <a href="/">
                    <img className="main-logo" src="https://ux.ed.team/img/edteam-ux.svg" alt="logo" />
                    {/* <img className="main-logo" src="https://img.freepik.com/vector-gratis/plantilla-logotipo-cupcake_59362-45.jpg" alt="logo" /> */}
                    
                </a>
            </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                <nav className="main-menu" id="main-menu">
                    <ul>
                        <li><NavLink to="/" exact="true">Inicio</NavLink></li>
                        {/* <li><NavLink to="/cupcakes" exact="true">Cupcakes</NavLink></li> */}
                        <li><NavLink to="/servicios" exact="true">Servicios</NavLink></li>
                        <li><NavLink to="/productos" exact="true">Productos</NavLink></li>
                        <li><NavLink to="/portafolio" exact="true">Portafolio</NavLink></li>
                        <li><NavLink to="/clientes" exact="true">Clientes</NavLink></li>
                        <li><NavLink to="/nosotros" exact="true">Nosotros</NavLink></li>
                        <li><NavLink to="/contacto" exact="true">Contacto</NavLink></li>
                    </ul>
                </nav>
                <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
            </div>
        </div>
    </header>

    
);

export default Header;