import {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className ='app__navbar'>
      <div className='app__navbar-logo'>
        <h1 className='headtext__cormorant'>Chez G</h1>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Accueil</a></li>
        <li className='p__opensans'><a href='#about'>Histoire</a></li>
        <li className='p__opensans'><a href='#menu'>Boissons</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contacts</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>S&#39;enregistrer</a>
        <div />
        <a href='/' className='p__opensans'>Réserver</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex_center slide-botttom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home'>Accueil</a></li>
              <li className='p__opensans'><a href='#about'>Histoire</a></li>
              <li className='p__opensans'><a href='#menu'>Boissons</a></li>
              <li className='p__opensans'><a href='#awards'>Awards</a></li>
              <li className='p__opensans'><a href='#contact'>Contacts</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
