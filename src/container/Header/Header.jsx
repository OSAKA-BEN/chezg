import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Rééxplorer les saveurs'/>
      <h1 className='app__header-h1'>Les clés d&#39;une bonne recette</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Un grand restaurant ne se résume pas uniquement aux clients riches et aux belles voitures. Derrière il y a de la rigueur, de la passion, de l&#39;amour du travail bien fait, de la discipline et de la transmission du savoir.</p>
      <button type='button' className='custom__button'>La carte</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
