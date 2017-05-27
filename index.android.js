/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import OnButton from "./Button.js";
import RobotImage from "./MyImage.js";

export default class AutoBotInterface extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hey there! I'm AutoBot!
        </Text>
        <RobotImage />
        <OnButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    margin: 48
  },
  welcome: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: 'purple'
  }
});

AppRegistry.registerComponent("AutoBotInterface", () => AutoBotInterface);
