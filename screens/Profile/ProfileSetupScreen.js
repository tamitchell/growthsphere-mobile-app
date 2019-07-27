import React, {Component} from "react";
import {Text,View} from "react-native";
import {CheckBox} from "react-native-elements";
import Form from "../Profile/Form/HairTypesComponent"
import {styles} from "../../constants/styles";

class ProfileSetupScreen extends Component {
  constructor() {
    super()
  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({
      selectedItems
    });
  };

  render() {
    return ( 
    <View style={styles.container}>
      <Text> Hello, What are your stats ? </Text> 
      <View>
      {<Form />}
      </View> 
      </View>
    );
  }
}

export default ProfileSetupScreen;