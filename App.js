// import react stuff
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/header';
import Albumlist from './src/components/Album_list';

class App extends Component {
  render() {
    return (
      <View >
        <Header name="AppTano" /> 
        <Albumlist />
      </View>
    );
  }
}
export default App;

// skip this line if using Create React Native App
AppRegistry.registerComponent('albums', () => App);
