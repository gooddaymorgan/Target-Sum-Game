import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Game extends React.Component {
  target = 10 + Math.floor(40 * Math.random());
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.target}>{this.target}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'magenta',
    flex: 1,
    paddingTop: 30,
  },

  target: {
    fontSize: 40,
    color: 'magenta',
    backgroundColor: 'white',
    marginHorizontal: 50,
    textAlign: 'center',
    borderRadius: 30,
  },
});
export default Game;
