import "./Product.css";

function Product( {title, price, features, features2 } ){
    return(
        <div className="Product">
            <h3>Product {title}</h3>
            <h5>Price = {price} </h5>
            <p>Features = {features} </p>
            <p>Features2 = {features2.a} </p>
            {/* <p>Features2 = {features2.b} </p>
            <p>Features2 = {features2.c} </p> */}
        </div>
    );
}

export default Product;