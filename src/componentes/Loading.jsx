
const Loading = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="spinner-grow text-warning" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;