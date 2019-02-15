import React, { Component } from "react";
import { View, Text } from "react-native";
import Event from "./Event.jsx";

class EventList extends Component {
  state = {};
  render() {
    return (
      <View>
        <Event />
      </View>
    );
  }
}

export default EventList;
