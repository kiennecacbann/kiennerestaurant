import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavor" />
      <h1 className='app__header-h1'>The key to Fine Dinning</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>With European Cuisine Menu, the restaurant staff has worked hard to find the source of fresh
        European ingredients right after the harvest.</p>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
