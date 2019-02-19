import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Event from "./Event";

class EventList extends Component {
  state = {};
  render() {
    return (
      <View style={{ width: 350, alignItems: "center" }}>
        <ScrollView>
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </ScrollView>
      </View>
    );
  }
}

export default EventList;
