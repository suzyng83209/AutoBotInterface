import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";

const TOGGLE_URL = "http://toggleserver.herokuapp.com/";

class OnButton extends Component {
  constructor(props) {
    super(props);
    this.state = { autoRespondOn: false };
  }

  onPressButton = () => {
    const { autoRespondOn } = this.state;
    const requestUrl = TOGGLE_URL.concat(autoRespondOn ? "false" : "true");
    fetch(requestUrl)
      .then(response => response.json())
      .then(responseJson =>
        this.setState({ autoRespondOn: responseJson.botOn })
      )
      .catch(error => console.error(error));
  };

  render = () => {
    const buttonText = this.state.autoRespondOn ? "Turn Off" : "Turn On";
    return (
      <Button
        onPress={this.onPressButton}
        title={buttonText}
        style={styles.button}
      />
    );
  };
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9370DB"
  }
});

export default OnButton;
