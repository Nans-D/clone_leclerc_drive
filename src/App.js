import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Body from "./components/Body/Body";
import Panier from "./components/Panier/Panier";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <div className="testest">
          <Header></Header>
          <Nav></Nav>
          <div class="max-width">
            <Body></Body> 
            </div>
            <div className="panier-container">
              <Panier></Panier>
            </div>
            <div className="footer-container">
              <Footer></Footer>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
