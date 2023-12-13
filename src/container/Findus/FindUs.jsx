import {SubHeading } from '../../components';
import {images} from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Trouvez Moi</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Rue du Chateau, Loperhet, Finistère, Bretagne</p>
        <p className='p__cormorant' style={{color: '#DCCA87', margin: '2rem 0'}}>Heures d&#39;ouverture</p>
        <p className='p__opensans'>Lundi - Vendredi : 12h00 - 21h00</p>
        <p className='p__opensans'>Samedi - Dimanche: 10h00 - 23h00</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}><a href="https://www.google.com/maps/place/Rue+du+Ch%C3%A2teau+d'Eau,+29470+Loperhet,+France/@48.3745938,-4.3207965,17.62z/data=!4m5!3m4!1s0x4816b69eda260f69:0xf1d89d7842bbceaf!8m2!3d48.3745054!4d-4.3195337" target="blank_">Voir Le Plan</a></button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus'></img>
    </div>
  </div>
);

export default FindUs;
