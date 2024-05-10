import "./Product.css";

function Product( {title, price} ){
    return(
        <div className="Product">
            <h3>Product {title}</h3>
            <h5>Price = {price} </h5>
        </div>
    );
}

export default Product;