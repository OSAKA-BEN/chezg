import{SubHeading} from '../../components';
import {images} from '../../constants';
import './Chef.css';

const  Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef2} alt='chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Mots du chef" />
      <h1 className='headtext__cormorant'>Il Faut que ça Chante</h1>
    
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'></img>
        </div>
        <p className='p__opensans'>Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu ; et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie... je ne suis qu’amour ! Et finalement, quand des gens me disent « Mais comment fais-tu pour avoir cette humanité ? », je leur réponds très simplement que c’est ce goût de l’amour, ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique... mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Jérôme Dissegnia</p>
        <p className='p__opensans'>Chef étoilé de sa propre cuisine</p>
        <img src={images.sign} alt='sign'></img>
      </div>
    
    </div>
  </div>
);

export default Chef;
