import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View
} from "react-native";
import { FormLabel, FormInput, FormValidationMessage, Input } from 'react-native-elements'
import { styles } from "../constants/styles";


class ProfileSetupScreen extends Component {
  constructor() {
    super();
    this.state = {
      hairType: '',
      hairLength: '',
      hairDensity: '',
      hairPorosity: ''
    };
  }
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
            <FormLabel>{'Name'}</FormLabel>
            <FormInput onChangeText={someFunction}/>
            <FormValidationMessage>{'Error message'}</FormValidationMessage>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ProfileSetupScreen;
