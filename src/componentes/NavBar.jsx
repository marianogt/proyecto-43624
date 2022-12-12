import React from "react";
import CardWidget from "./CardWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#"><img src="imagenes/dylonelectronica.jpg" alt="DylonElectronica" width="200"  height="52"  className="rounded-3" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                         <li className="nav-item">
                             <a className="nav-link" aria-current="page" href="#">Productos</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Empresa</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Contacto</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Carrito</a>
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