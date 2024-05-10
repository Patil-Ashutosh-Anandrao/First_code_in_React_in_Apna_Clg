import Product from "./Product.jsx";

function ProductTab(){
    return(
        <>
            <Product title="Mobile" price="30,000"/>
            <Product title="Tablet" price={40000}/>
            <Product title="Laptop" price={50000}/>
        </>
    );
}

export default ProductTab;