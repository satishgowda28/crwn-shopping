import React from 'react';

import './custome-button.style.scss';

const CustomButton = ({children, ...otherProps}) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
