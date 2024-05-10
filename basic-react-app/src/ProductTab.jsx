import Product from "./Product.jsx";

function ProductTab(){

    // store value in array 
    let options = ["4GB RAM", "64GB Storage", "13MP Camera"];
    
    // store value in object 
    let options2 = {a: "4GB RAM", b: "64GB Storage", c: "13MP Camera"};

    //rendering array elements using array element 
    let options3 = [ <li>"4GB RAM"</li>, 
                     <li> "64GB Storage"</li>, 
                     <li> "13MP Camera"</li> 
                   ];

    //rendering array elements using array values using MAP function
    let options4 = ["4GB RAM", "64GB Storage", "13MP Camera"];

    return(
        <>
            {/* <Product title="Mobile" price={10000} features6={options4}


                    //  features={options} 
                    //  features2={options2}
                    //  features3={["4GB RAM", "64GB Storage", "13MP Camera"]}  //we can also write array like this
                    //  features4={{a: "4GB RAM", b: "64GB Storage", c: "13MP Camera"}} //we can also write object like this
                    //  features5={options3}
            />
             */}

            <Product title="Mobile" price={30000}/>
            <Product title="Tablet" price={40000}/>
            <Product title="Laptop" price={50000}/>
        </>
    );
}

export default ProductTab;