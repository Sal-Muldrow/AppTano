import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class AlbumCard extends Component {

  render() {
    return (
      <View style={styles.PaddingCard}>
        <View style={styles.viewStyle}>
          <Text style={styles.AlbumTitle}>{this.props.Title}
          <Text style={styles.ArtistTitle} >{'\n'} By {this.props.Artist} </Text>
          <Text style={styles.ArtistTitle} >{'\n'}{'\n'} Melon Gave this album a: </Text>

          <Text style={styles.ScoreTitle} >{'\n'} {'\n'}{this.props.Score}/10 </Text>
          </Text>

        </View>
      </View>
    );
  }
}
//styling
const styles = StyleSheet.create({
  AlbumTitle: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 45,
  },
  ScoreTitle: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 60,
  },
  ArtistTitle: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  PaddingCard: {

    paddingTop: 10
  },
  viewStyle: {
  backgroundColor: '#f8f8f8',

  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  height: 400,
  paddingTop: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2
  },
});


export default AlbumCard;
// skip this line if using Create React Native App
//wow
