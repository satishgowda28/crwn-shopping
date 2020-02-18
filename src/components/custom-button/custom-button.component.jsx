import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children,isGoogleSingin, reversed, ...otherProps}) => (
  <button className={`${reversed ? 'reversed': ''} ${isGoogleSingin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
