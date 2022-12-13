import { Link, NavLink } from "react-router-dom";
import CardWidget from "./CardWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to={"/"}><img src="imagenes/dylonelectronica.jpg" 
                    alt="DylonElectronica" width="200"  height="52"  className="rounded-3" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                         <li className="nav-item">
                             <NavLink className="nav-link" activeclassname="page" to={"/category/multimetro"}>Multimetros</NavLink>
                         </li>
                         <li className="nav-item">
                             <NavLink className="nav-link" activeclassname="page" to={"/category/camara"}>Camaras</NavLink>
                         </li>
                         <li className="nav-item">
                             <NavLink className="nav-link" activeclassname="page" to={"/category/aspiradora"}>Aspiradors</NavLink>
                         </li>
                         <li className="nav-item">
                             <NavLink className="nav-link" activeclassname="page" to={"/category/portero"}>Porteros</NavLink>
                         </li>
                         </ul>
                    </div>
                    </nav>
                </div>
                
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CardWidget />
                </div>
            </div>

        </div>
    )
}

export default NavBar;