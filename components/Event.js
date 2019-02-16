import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TabBarIcon from "./TabBarIcon";

class Event extends Component {
  state = {
    favorite: false
  };

  handleFavorite = () => {
    this.setState({ favorite: !this.state.favorite });
  };
  render() {
    return (
      <View
        style={{
          margin: 10,
          padding: 20,
          backgroundColor: "#FFFFFF",
          width: 330,
          height: 110
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text>Code Your First Website</Text>
          <TouchableOpacity onPress={this.handleFavorite}>
            <TabBarIcon
              name={this.state.favorite ? "ios-heart" : "ios-heart-empty"}
            />
          </TouchableOpacity>
        </View>
        <Text>Learn HTML, CSS, and JS</Text>
      </View>
    );
  }
}

export default Event;
