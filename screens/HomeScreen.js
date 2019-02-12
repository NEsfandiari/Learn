import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  Button,
  StyleSheet
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";
const styles = StyleSheet.create({
  mainText: {
    color: "white",
    fontSize: 50,
    textAlign: "center",
    marginTop: 50
  },

  subText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 30
  },

  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <ImageBackground
          source={require("../assets/images/background.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.container}>
            <View>
              <Text style={styles.mainText}>[L]Earn</Text>
              <Text style={styles.subText}>Invest Hedera Into Your Life</Text>
            </View>
            <View style={{ backgroundColor: "#50E3C2", width: 300 }}>
              <Button
                title={"Get Started"}
                onPress={this._handleHelpPress}
                color="white"
              />
            </View>
          </View>

          <View>
            <Text>This is a tab bar. You can edit it in:</Text>
            <MonoText>navigation/MainTabNavigator.js</MonoText>
          </View>
        </ImageBackground>
      </View>
    );
  }

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
    );
  };
}
