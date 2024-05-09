import "./App.css";

// import title
import Title from "./Title.jsx";

// import Named_export 
import { Title2, Discription } from "./Named_export.jsx";


// this app function is a app component 
function App() {
  return (
    <div>
      <Title /> 

      <Title2 />
      <Discription />

    </div>
  );
}
// the written by thhis app component will be our UI (userinterface) means what we see on the screen

export default App;
