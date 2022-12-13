import ItemCount from "./ItemCount";

const ItemDetail = ({item})=>{
    console.log(item);
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
                <ItemCount stock={item.stock}/>
            </div>
        </div>
    )
}

export default ItemDetail;