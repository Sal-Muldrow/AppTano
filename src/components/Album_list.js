import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Data from './Data.json'; // get our list data
import AlbumCard from './AlbumCard'; //get album card

class Albumlist extends Component {

  RenderAlbums() {
    console.log(Data); //log data for debug

    return Data.map(album => <AlbumCard key={album.TITLE} Title={album.TITLE} Artist={album.ARTISTS} Score={album.SCORE} />);
    //get album scores,titles,artists
  }
  render() {
    return (
        <ScrollView>
        <View>{this.RenderAlbums()}</View>
        </ScrollView>

    );
  }
}
//styling
const styles = StyleSheet.create({
  bigblue: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  viewStyle: {
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',

  },
});


export default Albumlist;
// skip this line if using Create React Native App
//wow
