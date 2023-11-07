import "./Header.css";
import userImage from "../../img/user_icon.png";
import driveImage from "../../img/google_drive.png";

const Header = () => {
  return (
    <div>
      <header>
        <div className="drive">
          <img src={driveImage} alt="test" />
        </div>
        <div className="search-bar">
          <input id="submit-icon" type="submit" />
          <input
            id="search-input"
            type="text"
            placeholder="Rechercher produit"
          />
        </div>
        <i className="user-icon"></i>
        <img className="user-icon" src={userImage} alt="" />
      </header>
    </div>
  );
};

export default Header;
