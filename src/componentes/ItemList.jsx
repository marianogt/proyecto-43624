import React from "react";
import Items from "./Items";

const ItemList = ({ item }) => {
    return (
        <div className="row">
            {
                 item.map(producto => <Items item={producto} />)
            }
        </div>
    )
}

export default ItemList;

    // <div className="row">
                         {
                            //  productos.ItemList(prod => (
                            //      <div className="col-md-3 mb-3" key={prod.id}>
                            //          <div className="card">
                            //              <img src={prod.image} className="card-img-top" alt={prod.name} />
                            //              <div className="card-body text-center">
                            //                  <h5 className="card-title">{prod.name}</h5>
                            //                  <p className="card-text">{prod.description}</p>
                            //                  <p><b>${prod.price}</b></p>
                            //              </div>
                            //          </div>
                            //      </div>
                            //  ))
                         }
    // </div>

// export default ItemList;
                  