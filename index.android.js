/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import OnButton from './Button.js';

export default class AutoBotInterface extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          AutoBot is Here!
        </Text>
        <OnButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 24,
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('AutoBotInterface', () => AutoBotInterface);
