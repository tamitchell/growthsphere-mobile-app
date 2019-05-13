import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Input } from "react-native-elements";
import { styles } from "../constants/styles";

class ProfileSetupScreen extends Component {
  constructor() {
    super();
    this.state = {
      hairType: "",
      hairLength: "",
      hairDensity: "",
      hairPorosity: ""
    };
  }

  _someFunction = () => {
    return "Coming";
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Hello, What are your stats?</Text>
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View>
            <Input
              placeholder="INPUT WITH ERROR MESSAGE"
              errorStyle={{ color: "red" }}
              errorMessage="ENTER A VALID ERROR HERE"
              shake={true}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ProfileSetupScreen;
