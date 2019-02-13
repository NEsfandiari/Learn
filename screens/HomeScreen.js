import React, { Component } from "react";

import { View, Text } from "react-native";
import TabBarIcon from "../components/TabBarIcon";

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
        <Text>Home</Text>
        <View>
          <View
            style={{
              flex: 3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%"
            }}
          >
            <Text>Subscribed Categories</Text>
            <TabBarIcon name="ios-options" />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
