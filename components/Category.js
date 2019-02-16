import React, { Component } from "react";
import { View, ImageBackground, Text } from "react-native";

class Category extends Component {
  render() {
    return (
      <View
        style={{
          height: 150,
          width: 120,
          margin: 5
        }}
      >
        <ImageBackground
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
          }}
          imageStyle={{ borderRadius: 10 }}
          source={require("../assets/images/background.jpg")}
        >
          <Text>Inside</Text>
        </ImageBackground>
      </View>
    );
  }
}

export default Category;
