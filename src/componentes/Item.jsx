import { Link } from "react-router-dom";

const Item = ({ items }) => {
    return (
        <div className="col-md-4">
            <Link to={"/item/" + items.id} className="text-dark text-decoration-none">
                <div className="card text-center border border-0 ">
                    <div className="col-lg-6"> 
                    <img className="img-fluid card-img-top" src={items.image} alt={items.nombre} />
                    </div>
                    <div className="card-body">
                        <p className="card-text">{items.nombre}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item