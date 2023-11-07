import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
export const Footer = () => {
    return <div>
        <div className='max-width footer-background'>
            <div className='follow-us-footer'>
                <p>Suivez nous partout</p>
                <a href="www.youtube.com"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="www.youtube.com"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="www.youtube.com"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="www.youtube.com"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            <div>
                <a className="links-footer" href="#1">Rappel produit</a>
                <a className="links-footer" href="#1">Mentions légales et CGU</a>
                <a className="links-footer" href="#1">CGV</a>
                <a className="links-footer" href="#1">Charte de Protection des Données Personnelles</a>
                <a className="links-footer" href="#1">Charte des Cookies</a>
                <a className="links-footer" href="#1">Index égalité professionnelle</a>
                <a className="links-footer"  href="#1">Tarifs de livraison</a>
                <a className="links-footer" href="#1">Conditions promotionnelles</a>
                <a className="links-footer"  href="#1">Suggérer un produit</a>
                <a className="links-footer" href="#1">Formulaire de rétractation</a>
                <a className="links-footer" href="#1">Aide en ligne</a>
                <a className="links-footer" href="#1">Recrutement</a>
            </div>
        </div>
    </div>
}
