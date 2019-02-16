import React, { Component } from "react";

import { View, Text } from "react-native";
import TabBarIcon from "../components/TabBarIcon";
import EventList from "../components/EventList";
import CategoryList from "../components/CategoryList";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };
  state = {};
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#F7F8FA",
            padding: 10,
            width: 370,
            height: 520
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 350,
              padding: 5
            }}
          >
            <Text>Subscribed Categories</Text>
            <TabBarIcon name="ios-options" />
          </View>
          <CategoryList />
          <View style={{ paddingBottom: 10 }}>
            <Text>Favorited Events</Text>
          </View>
          <EventList />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
