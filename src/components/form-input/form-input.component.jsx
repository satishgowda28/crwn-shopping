import React from 'react';

import './form-input.style.scss';

const FormInput = ({handleChange, label, ...otheProps}) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otheProps} />
    { label ?
      <label className={`${otheProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
      : null
    }
  </div>
);

export default FormInput;