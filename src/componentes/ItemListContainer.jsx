import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import arrayProductos from "./Productos.json";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos)
            }, 500);
        })
    
        promesa.then((data) => {
            setProductos(data);
        })
      }, [])

    return (
        <div className="container">
            <ItemList item={productos}/>
        </div>
    )
}


export default ItemListContainer;