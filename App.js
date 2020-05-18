// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Routes from './src/routes';

class App extends Component {
   render() {
      return (
         <Routes/>
      );
   }
}

export default App;

AppRegistry.registerComponent('App', () => App);