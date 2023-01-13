
const Footer = () => {
    return (
        <div className="container py-3">
            <div className="row">
                <div className="col-md-6">
                    <a href="/" className="mx-1"><img src="/imagenes/facebook.png" alt="Facebook" width="32" /></a>
                    <a href="/" className="mx-1"><img src="/imagenes/gorjeo.png" alt="Twiter" width="32" /></a>
                    <a href="/" className="mx-1"><img src="/imagenes/whatsapp.png" alt="Whatsapp" width="32" /></a>
                    <a href="/" className="mx-1"><img src="/imagenes/instagram.png" alt="Instagram" width="32" /></a>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <a href="https://apps.apple.com/us/app/apple-store/id375380948/" target="_blank" 
                    rel="noreferrer" className="mx-1"><img src="/imagenes/app-store.png" alt="App Store" width="115" /></a>
                    <a href="https://play.google.com/store/apps?hl=es_AR" target="_blank" 
                    rel="noreferrer" className="mx-1"><img src="/imagenes/play-store.png" alt="Play Store" width="115" /></a>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-10">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="noreferrer" target="_blank">Política de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="https://www.buenosaires.gob.ar/defensaconsumidor" target="_blank" rel="noreferrer">Defensa del Consumidor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="noreferrer" target="_blank">Protección de datos personales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="noreferrer" target="_blank">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 text-end">
                    <p><img src="/imagenes/electronicadylon.jpg" alt="DylonElectronica" width="100" className="rounded-1" />©DylonElectrónica 2022</p> 
                </div>
            </div>
        </div>
    )
}

export default Footer;