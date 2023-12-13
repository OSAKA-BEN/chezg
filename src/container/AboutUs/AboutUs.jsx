import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding'id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter'/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>A propos</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>Ça fait deux morts là, ça commence à être ennuyeux ! Après ça va être qui ? Ça va être toi, après ça va être toi, après ça va être toi... Bon là ça va. Mais après ça va être moi. Et là ça va être triste.</p>
        <button type='button' className='custom__button'>A propos de quoi</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife'/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Histoire</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>Avant on marchait sur quatre pattes. Maintenant on marche sur deux pattes. Si ça se trouve, un jour on marchera sur zéro patte...</p>
        <button type='button' className='custom__button'>Histoire de</button>
      </div>

    </div> 
  </div> 
);

export default AboutUs;
