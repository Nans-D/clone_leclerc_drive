import "./Panier.css";
import React from "react";
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Panier() {
  const totalPrice = "0.00";
  let productPrice = "0.00";
  let economiePrice = "0.00";
  return (
    <div className="panier-container-composant">
      <div className="bandeau-panier">
        <i></i>
        <FontAwesomeIcon icon={faCartShopping} />
        <p>Panier:</p>
        <p>{totalPrice}</p>
      </div>
      <div className="products-panier">
        <img src="" alt="test" />
        <p></p>
        <button></button>
        <p>{productPrice}</p>
      </div>
      <div className="total-panier-container">
        <div className="economie-container">
          <p>Mes économies</p>
          <p>{economiePrice}</p>
        </div>
        <div className="total-price-container">
          <p>Total à Payer</p>
          <p>{totalPrice}</p>
        </div>
      </div>
      <div className="links-panier">
        <a href="jesais pas">
          <i></i>Voir le détail de mon panier
        </a>
        <a href="jesais pas">
          <i></i>Vider le Panier
        </a>
        <a href="jesais pas">
          <i></i>Ajouter le panier dans une liste
        </a>
      </div>
      <div id="btn-check-panier">
        <button>Valider et Payer</button>
      </div>
    </div>
  );
}

export default Panier;
