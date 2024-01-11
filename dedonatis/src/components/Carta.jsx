import pizza1 from "../assets/pizza1.jpg";
import Compra from "./Compra";

const Carta = () => {
    return (
        <div className="container p-4 my-5 mx-auto border border-warning rounded">
            <div className="row">
                <div className="col-md-6 text-end">
                    <img src={pizza1} alt="Pizza Napolitana" className="img-fluid" width='85%'/>
                </div>
                <div className="col-md-6 py-5">
                    <h1>Pizza Napolitana</h1>
                    <p>La pizza napolitana con sus ingredientes cuidadosamente seleccionados te conquista con su masa liviana, queso derretido y sabor delicioso, creando una experiencia gastronómica incomparable.</p>
                    <h5>Ingredientes:</h5><h6>Muzzarella, Jamón, Tomate, Aceiturnas negras y Albahaca.</h6>
                    <Compra/>
                </div>
            </div>
        </div>
    )
}

export default Carta;