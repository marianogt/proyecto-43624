import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="row">
            {
                 items.map(producto => <Item key={producto.id} items={producto} />)
            }
        </div>
    )
}

export default ItemList;  