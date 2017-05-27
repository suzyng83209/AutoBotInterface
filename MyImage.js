import React, { Component } from "react";
import { AppRegistry, View, Image } from "react-native";

class RobotImage extends Component {
  render() {
    return (
      <View>
        <Image
          style={{ height: 420, width: 360 }}
          source={require("./robot.jpg")}
        />
      </View>
    );
  }
}

export default RobotImage;
