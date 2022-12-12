import React from "react";
// import { Link } from "react-router-dom";

const Items = ({ item }) => {
    return (
        <div className="col-md-4">
            {/* <Link to={"/item/" + item.id} className="text-dark text-decoration-none"> */}
                <div className="card text-center border border-0 ">
                    <div className="col-lg-6"> 
                    <img className="img-fluid card-img-top" src={item.image} alt={item.nombre} />
                    </div>
                    <div className="card-body">
                        <p className="card-text">{item.nombre}</p>
                    </div>
                </div>
            {/* </Link> */}
        </div>
    )
}

export default Items