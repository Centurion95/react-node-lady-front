import { NavLink } from "react-router-dom";

const AsidePortafolio = () => (
    <div>
        <aside className="span-l-1 main-sidebar sidebar-first">
            <div className="vertical-menu-toggle to-l" id="vertical-menu-toggle" data-content="Filtros"></div>
            <nav className="vertical-menu" id="vertical-menu">
                <ul>
                    <li><NavLink to="/portafolio" exact="true">portafolio</NavLink></li>
                    <li><NavLink to="/portafolio-uno" exact="true">uno</NavLink></li>
                    <li><NavLink to="/portafolio-dos" exact="true">dos</NavLink></li>
                    <li><NavLink to="/portafolio-tres" exact="true">tres</NavLink></li>
                </ul>
            </nav>
        </aside>

    </div>

);

export default AsidePortafolio;