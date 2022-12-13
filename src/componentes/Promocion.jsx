
const Promocion = () => {
    return (
        <div className="container-fluid bg-info">
            <div className="container py-2">
                <div className="row">
                    <div className="col-md-2">
                        <img src={"imagenes/dylonelectronica.jpg"} alt="DylonElectronica" width="180" height="80" className="rounded-3" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div>
                            <h2>Adquirí nuestros productos</h2>
                            <p>Seguinos en las redes sociales o buscanos en Mercado Libre</p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex align-items-center text-end">
                        <a href="https://www.electronicadylon.com.ar/" className="btn btn-light" >Compra Mayorista</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promocion;