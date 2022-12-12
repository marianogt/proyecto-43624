const Banners = () => {
    return (
        <div className="container">
            <div className="row gx-2 mb-2">
                <div className="col-md-3 text-center shadow p-4 mx-auto bg-body rounded">
                    <p><img src="imagenes/productos/con camara.jpg" alt="Elementos" className="img-fluid" /></p>
                    <h4>¡Selecciona el producto de tu interes!</h4>
                    <p>Sumalo al carrito</p>
                    <p><a href="" target="_blank" className="btn btn-info">Ver Más</a></p>
                </div>
                <div className="col-md-3 text-center shadow p-4 mx-auto bg-body rounded">
                    <p><img src="imagenes/productos/SNT17B.jpg" alt="Ver Instrumentos" className="img-fluid" /></p>
                    <h4>Recorre la Variedad de instrumental</h4>
                    <p>Seleccioná el que se adapte a tu actividad</p>
                    <p><a href="" target="_blank" className="btn btn-info">Ver Más</a></p>
                </div>
            </div>
        </div>
    )
}

export default Banners;