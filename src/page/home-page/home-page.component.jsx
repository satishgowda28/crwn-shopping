import React from 'react';
import {HomePageContainer} from './home-page.styles';
import Directory from '../../components/directory/directory.component';

const HomePage = (props) => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;