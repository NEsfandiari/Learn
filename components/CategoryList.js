import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Category from "./Category";

class EventList extends Component {
  state = {};
  render() {
    return (
      <View style={{ width: 370, alignItems: "center", padding: 10 }}>
        <ScrollView horizontal="true">
          <Category />
          <Category />
          <Category />
        </ScrollView>
      </View>
    );
  }
}

export default EventList;
