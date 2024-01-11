import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand text-warning" href="index.html">Mascarpone</a>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-warning" href="#">Tradicionales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-warning" href="pages/pedidos.html">Especiales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-warning" href="pages/news.html">Gourmet</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-warning" href="pages/contacto.html">Bebidas</a>
                    </li>
                </ul>
            </div>
            <div className='ml-2'>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;
