import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title='Newsletter' />
      <h1 className='headtext__cormorant'>Suivez moi donc</h1>
      <p className='p__opensans'>ça va être tout noir !</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Entrez votre adresse email'></input>
      <button className='custom__button'>S&#39;inscrire</button>
    </div>
  </div>
);

export default Newsletter;
