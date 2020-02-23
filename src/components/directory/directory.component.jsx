import React from 'react';
import './directory.style.scss';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {sectionsSelector} from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({sections}) => (
  <div className="directory-menu">
    {
      sections.map(({id, ...theSectionprops}) => (
        <MenuItem key={id} {...theSectionprops} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: sectionsSelector
});

export default connect(mapStateToProps)(Directory);