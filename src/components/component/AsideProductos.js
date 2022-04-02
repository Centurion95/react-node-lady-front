import { NavLink } from "react-router-dom";

const AsideProductos = () => (
    <div>
        <aside className="span-l-1 main-sidebar sidebar-first">
            <div className="vertical-menu-toggle to-l" id="vertical-menu-toggle" data-content="Filtros"></div>
            <nav className="vertical-menu" id="vertical-menu">
                <ul>
                    <li><NavLink to="/productos" exact="true">productos</NavLink></li>
                    <li><NavLink to="/productos-uno" exact="true">uno</NavLink></li>
                    <li><NavLink to="/productos-dos" exact="true">dos</NavLink></li>
                    <li><NavLink to="/productos-tres" exact="true">tres</NavLink></li>
                </ul>
            </nav>
        </aside>

    </div>

);

export default AsideProductos;