import "./App.css";

// import title
import Title from "./Title.jsx";

// import Named_export 
import { Title2, Discription } from "./Named_export.jsx";

// impoet Product 
import Product from "./Product.jsx";

// import ProductTab
import ProductTab from "./ProductTab.jsx";

// import MsgBox 
import MsgBox from "./MsgBox.jsx";

// this app function is a app component 
function App() {
  return (
    <div>
      {/* 
      <Title /> 
      <Title2 />
      <Discription /> */}

      {/* <Product/>
      <Product/>
      <Product/> */}


      <MsgBox userName="Ashu" textColor="pink"/>
      <MsgBox userName="Ashutosh" textColor="blue"/>
      <MsgBox userName="Patil" textColor="green"/>

      <ProductTab/>



    </div>
  );
}
// the written by thhis app component will be our UI (userinterface) means what we see on the screen
export default App;
