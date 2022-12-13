import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import arrayProductos from "./json/Productos.json";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)));
            }, 2000);
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