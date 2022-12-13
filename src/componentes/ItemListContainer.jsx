import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import arrayProductos from "./json/Productos.json";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id): arrayProductos);
            }, 2000);
        })
    
        promesa.then((data) => {
            setProductos(data);
        })
      }, [id]);

      return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-warn9ing text-center" role="alert">
                        <ItemList items={productos} />
                    </div>
                </div>
            </div>
        </div>
        )
}

export default ItemListContainer;