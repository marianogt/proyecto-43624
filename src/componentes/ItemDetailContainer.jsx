import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore} from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
 import Loading from "./Loading";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "articulos", id);
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            } 
        });
    }, [id]);

    return (
        <div className="container my-5">
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
    )
}

//para cargar elementos unica vez
    // useEffect(()=> {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "articulos");

    //     arrayProductos.forEach((item) => {
    //         addDoc(itemsCollection, {nombre: item.nombre, categoria : item.categoria, descripcion: item.descripcion,
    //              stock: item.stock, precio: item.precio, image: item.image})
    //     })
    // },[])

export default ItemDetailContainer;