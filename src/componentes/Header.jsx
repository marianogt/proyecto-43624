import React from "react";
import CardWidget from "./CardWidget";
import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <NavBar />
                    <ItemListContainer greeting={"Bienvenidos a Dylon"}/>
                </div>

                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CardWidget />
                </div>
            </div>
        </div>
    )
}

export default Header;