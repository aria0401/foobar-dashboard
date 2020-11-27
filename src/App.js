
import "./App.scss";
// import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Loader from "../src/components/Loader"

function App(props) {
  
  return (
    <div className="App">
       {! props && <Loader />}
      <Header />
      <Main />
     
    </div>
  );
}

export default App;
