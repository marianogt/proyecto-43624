import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import arrayProductos from "./Productos.json";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)));
            }, 500);
        })
    
        promesa.then((data) => {
            setProductos(data);
        })
      }, [id])

    return (
        <div className="container my-5">
            <ItemDetail item={productos} />
        </div>
    )
}

export default ItemDetailContainer;