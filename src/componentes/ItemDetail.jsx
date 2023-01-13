import React, { useState, useEffect, useContext } from "react";
import ItemCount from "./ItemCount";
import {CartContext} from "./context/CartContext";

const ItemDetail = ({item})=>{
    const {addItem} = useContext(CartContext);
    const [îtemStock, setItemStock] = useState(0);

    const onAdd = (cantidad) => {
        setItemStock(îtemStock - cantidad);
        addItem(item, cantidad);
    }

    useEffect(() => {
        setItemStock(item.stock);
    }, [item]);

    return(
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.image} alt={item.nombre} className="img-fluid"/>
            </div>
            <div className="col-md-4"> 
                <h1>{item.nombre}</h1>
                <p>{item.categoria}</p>
                <h5>{item.descripcion}</h5>
                <p><b>${item.precio}</b></p>
                <ItemCount stock={item.stock} onAdd = {onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;