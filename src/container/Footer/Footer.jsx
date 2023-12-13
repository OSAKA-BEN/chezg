import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'
import {FooterOverlay , Newsletter } from '../../components';
import { images } from '../../constants';


import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contactez Nous</h1>
        <p className='p__opensans'>Rue du Chateau d&#39;eau, Loperhet</p>
        <p className='p__opensans'>02 98 00 00 00</p>
        <p className='p__opensans'>06 75 00 00 00</p>
      </div>
      <div className='app__footer-links_logo'>
        <h1 className='headtext__cormorant'>Chez G</h1>
        <p className='p__opensans'>le meilleur moyen de se retrouver est de se perdre au service des autres.</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{ marginTop: 15}}></img>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiInstagram />
          <FiYoutube />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Jours d&#39;ouverture</h1>
        <p className='p__opensans'>Lundi au Vendredi:</p>
        <p className='p__opensans'>12h00 - 21h00</p>
        <p className='p__opensans'>Samedi et Dimanche:</p>
        <p className='p__opensans'>10h00 - 23h00</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Chez G. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
