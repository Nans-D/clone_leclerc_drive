import "./Body.css";
import VinBordeau from "../../img/vin_bordeaux.jpeg";
import PromotionBaniere from "../../img/promotions-baniere.jpeg"

function Body() {
  const price = `${2}€${99}`;
  const priceKg = 4 + "€/L";
  return (
    <div>
      <section className="products-container-one">
          <div className="banniere-container">
            <img id="banniere-promotion" src={PromotionBaniere} alt="test" />
          </div>
        <div className="product-child-one">
          <div>
            <img className="img-item" src={VinBordeau} alt="test" />
            <div className="price-container">
              <div>
                <h3>{price}</h3>
                <p className="price-kg">{priceKg}</p>
              </div>
              <button className="add-panier">+</button>
            </div>
            <p>lorem ipsum tadeus ej enss nob</p>
          </div>
        </div>
        <div className="product-child-one">
          <div>
            <img className="img-item" src={VinBordeau} alt="test" />
            <div className="price-container">
              <div>
                <h3>{price}</h3>
                <p className="price-kg">{priceKg}</p>
              </div>
              <button className="add-panier">+</button>
            </div>
            <p>lorem ipsum tadeus ej enss nob</p>
          </div>
        </div>
        <div className="product-child-one">
          <div>
            <img className="img-item" src={VinBordeau} alt="test" />
            <div className="price-container">
              <div>
                <h3>{price}</h3>
                <p className="price-kg">{priceKg}</p>
              </div>
              <button className="add-panier">+</button>
            </div>
            <p>lorem ipsum tadeus ej enss nob</p>
          </div>
        </div>
        <div className="product-child-one">
          <div>
            <img className="img-item" src={VinBordeau} alt="test" />
            <div className="price-container">
              <div>
                <h3>{price}</h3>
                <p className="price-kg">{priceKg}</p>
              </div>
              <button className="add-panier">+</button>
            </div>
            <p>lorem ipsum tadeus ej enss nob</p>
          </div>
        </div>
      </section>
      <section className="products-container-two">
        <div className="product-child-one">
          <div>
            <img className="img-item" src={VinBordeau} alt="test" />
            <div className="price-container">
              <div>
                <h3>{price}</h3>
                <p className="price-kg">{priceKg}</p>
              </div>
              <button className="add-panier">+</button>
            </div>
            <p>lorem ipsum tadeus ej enss nob</p>
          </div>
        </div>
        <div className="product-child-one">
          <div>
            <img className="img-item" src={VinBordeau} alt="test" />
            <div className="price-container">
              <div>
                <h3>{price}</h3>
                <p className="price-kg">{priceKg}</p>
              </div>
              <button className="add-panier">+</button>
            </div>
            <p>lorem ipsum tadeus ej enss nob</p>
          </div>
        </div>
        <div className="product-child-one">
          <div>
            <img className="img-item" src={VinBordeau} alt="test" />
            <div className="price-container">
              <div>
                <h3>{price}</h3>
                <p className="price-kg">{priceKg}</p>
              </div>
              <button className="add-panier">+</button>
            </div>
            <p>lorem ipsum tadeus ej enss nob</p>
          </div>
        </div>
        <div className="product-child-one">
          <div>
            <img className="img-item" src={VinBordeau} alt="test" />
            <div className="price-container">
              <div>
                <h3>{price}</h3>
                <p className="price-kg">{priceKg}</p>
              </div>
              <button className="add-panier">+</button>
            </div>
            <p>lorem ipsum tadeus ej enss nob</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
