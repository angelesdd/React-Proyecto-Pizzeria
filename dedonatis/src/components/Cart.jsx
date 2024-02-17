import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import Trash from "../assets/trash.svg";

const Cart = () => {
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);
    if (CantTotalProductos() == 0) {
        return (
            <div className="container p-5">
                <div className="row">
                    <div className="col text-center">
                        <p className="display-2">🍕</p>
                        <div className="alert alert-danger" role="alert">No se encontraron productos seleccionados</div>
                        <Link to={"/"} className="btn btn-warning my-5">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Productos Seleccionados</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <table className="table">
                            <tbody>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td><img src={product.image} alt={product.title} width={80} /></td>
                                        <td>{product.title}</td>
                                        <td>${product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>${product.quantity * product.price}</td>
                                        <td><a href="#" onClick={() => {removeItem(product.id)}}><img src={Trash} alt="Eliminar Producto" title="Eliminar Producto"  /></a></td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan={4}>Total</td>
                                    <td>${SumaTotalProductos()}</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Cart;

