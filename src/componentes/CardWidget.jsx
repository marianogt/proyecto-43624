
const CardWidget = () => {
    return (
        <button type="button" className="btn btn-info position-relative">
            <img src="imagenes/cart.svg" alt="Carrito" width="32" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">8</span>
        </button>
    )
}

export default CardWidget;