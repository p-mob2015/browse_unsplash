import React from 'react';
import { SocialIcon } from 'react-social-icons';

import './styles.scss';

const socialIconProps = {
  fgColor: '#FFF',
  style: { height: 25, width: 25 },
};

const Footer = () => (
  <footer>
    <div className="credit">
      Special thanks to <a href="https://www.unsplash">Unsplash</a>
    </div>
    <div className="social">
      <SocialIcon url="https://twitter.com/somebiz" {...socialIconProps} />
      <SocialIcon url="https://linkedin.com/somebiz" {...socialIconProps} />
      <SocialIcon url="https://facebook.com/somebiz" {...socialIconProps} />
    </div>
  </footer>
);

export default Footer;
