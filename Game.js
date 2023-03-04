import React from 'react';
import PropTypes from 'prop-types';

import {View, Text, StyleSheet} from 'react-native';

class Game extends React.Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
  };
  randomNumbers = Array.from({length: this.props.randomNumberCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );

  target = this.randomNumbers
    .slice(0, this.props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.target}>{this.target} </Text>
        <View style={styles.randomContainer}>
          {this.randomNumbers.map((randomNumber, index) => (
            <Text style={styles.random} key={index}>
              {randomNumber}
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'hotpink',
    flex: 1,
    paddingTop: 30,
  },

  target: {
    fontSize: 40,
    backgroundColor: 'deeppink',
    color: 'white',
    marginHorizontal: 50,
    textAlign: 'center',
    borderRadius: 30,
    padding: 10,
    borderColor: 'white',
    borderWidth: 3,
  },

  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  random: {
    backgroundColor: 'white',
    color: 'deeppink',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
    borderRadius: 20,
    padding: 10,
    borderColor: 'deeppink',
    borderWidth: 3,
  },

  STATUS_PLAYING: {
    backgroundColor: '#bbb',
  },

  STATUS_WON: {
    backgroundColor: 'green',
  },

  STATUS_LOST: {
    backgroundColor: 'red',
  },
});
export default Game;
