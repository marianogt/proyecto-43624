import { doc, getDoc, getFirestore} from "Firebase/firestore";
import {useEffect, useState} from "react"

const Documento = () => {
    // const [producto, setProducto] = useState({});

    useEffect(()=> {

        const db = getFirestore();
        //  const item = doc(db, "items", "Lcq6NxGfFCztuFYdcrqS");

        const item = doc(db, "articulos", "0nsKDEDrlU XX r1ubClg2DR");
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                console.log(snapShot.data());
            } else {
                console.log("El Producto No Existe!");
            }
        });
    }, []);
    
    return (
        <h1>Documento</h1>
    )
}

export default Documento;