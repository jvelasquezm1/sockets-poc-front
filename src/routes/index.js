import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Home, Chat } from '../components';

const Routes = () => (
   <Router>
      <Scene key='root'>
         <Scene key='home' component={Home} title='Home' initial={true} />
         <Scene key='chat' component={Chat} title='Chat' />
      </Scene>
   </Router>
);
export default Routes;