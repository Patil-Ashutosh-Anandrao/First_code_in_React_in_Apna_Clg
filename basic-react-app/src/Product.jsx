import "./Product.css";

function Product( {title, price } ){
    //const list = features6.map( (feature) => <li>{feature}</li>);

    // let isDiscount = price > 30000 ? "Discount of 5 %" : " ";

    let isDiscount = price > 30000 ;

    let bgColor = { backgroundColor: isDiscount ? "yellow" : " " };

    return(
        <div className="Product" style={bgColor}>
            <h3>Product = {title}</h3>
            <h5>Price = {price} </h5>

            {/* <p>{isDiscount}</p> */}
            {/* <p>{ price > 30000 ? "Discount of 5 %" : " " }</p> */}
            {/* { price > 30000 ? <p>"Discount of 5 %"</p> : <a href="/">Get Discount</a> } */}

            { isDiscount && <p>Discount of 5 %</p> }

            {/* <p>Features = {list} </p> */}
            {/* we can also write in this manner  */}
            {/* <p>{ features6.map( (feature) => <li>{feature}</li>)} </p> */}
            
            {/*             
            <p>Features = {features} </p>
            <p>Features2 = {features2.a} </p> 
            <p>Features2 = {features2.b} </p>
            <p>Features2 = {features2.c} </p> */}
        </div>
    );
}

export default Product;