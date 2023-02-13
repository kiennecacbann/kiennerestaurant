import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center '>
      <img src={images.G} alt="g letter" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img' />
        <p className='p__opensans'> If the cooking method creates the soul of a dish, the ingredients make up its body. Kien
          Restaurant has chosen a rather thorny path in choosing ingredients for its dishes.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img' />
        <p className='p__opensans'> Our restaurant was established and grown in 2008 after those arduous days. The finest dishes of
          Europe can be found right on the menu of our restaurant.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;