import { NavLink } from "react-router-dom";

const AsideServicios = () => (
    <div>
        <aside className="span-l-1 main-sidebar sidebar-first">
            <div className="vertical-menu-toggle to-l" id="vertical-menu-toggle" data-content="Filtros"></div>
            <nav className="vertical-menu" id="vertical-menu">
                <ul>
                    <li><NavLink to="/servicios" exact="true">servicios</NavLink></li>
                    <li><NavLink to="/servicios-uno" exact="true">uno</NavLink></li>
                    <li><NavLink to="/servicios-dos" exact="true">dos</NavLink></li>
                    <li><NavLink to="/servicios-tres" exact="true">tres</NavLink></li>
                </ul>
            </nav>
        </aside>

    </div>

);

export default AsideServicios;