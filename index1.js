// Import a library
import React from 'react';
import {

  Text,
  AppRegistry,


} from 'react-native';

//Create a Component
const App = () => (
    <Text>Some Text</Text>
  );



//Render it to the device
AppRegistry.registerComponent('albums', () => App);
