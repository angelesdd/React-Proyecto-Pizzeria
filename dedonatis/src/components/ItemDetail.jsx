import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container p-4 my-5 mx-auto border border-dark rounded shadow-lg">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1 className="">{item.title}</h1>
                    <p>{item.description}</p>
                    <p><b>${item.price}</b></p>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )
    }
    export default ItemDetail;