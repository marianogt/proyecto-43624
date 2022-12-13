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
                <h5>{item.categoria}</h5>
                <p>{item.decripcion}</p>
                <p><b>${item.precio}</b></p>
                <ItemCount stock={item.stock}/>
            </div>
        </div>
    )
}

export default ItemDetail;