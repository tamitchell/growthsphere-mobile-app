import React, {Component} from "react";
import {Text,View} from "react-native";
import {CheckBox} from "react-native-elements";
import {hairTypes,hairLength} from "../../constants/hairstats";
import MultiSelectInput from "../Profile/Form/HairTypesComponent"
import {forms_text} from "../../constants/text.js";
import {styles} from "../../constants/styles";

class ProfileSetupScreen extends Component {
  constructor() {
    super();
    this.state = {
      hairType: [],
      hairLength: [],
      hairPorosity: "",
      lowDensity: false,
      medDensity: false,
      highDensity: false,
      lowPorosity: false,
      medPorosity: false,
      highPorosity: false,
      isVisible: false
    };
  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({
      selectedItems
    });
  };

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    return ( 
    <View style={styles.container}>
      <Text> Hello, What are your stats ? </Text> 
      <View>
      {MultiSelectInput(hairTypes, forms_text.HAIR_TYPE_SELECT)}
      </View> 
      <View>
      <SectionedMultiSelect items = {hairLength}
      uniqueKey = "id"
      subKey = 'children'
      selectText = 'Choose your length'
      showDropDowns = {true}
      readOnlyHeadings = {true}
      onSelectedItemsChange = {this.onSelectedItemsChange}
      selectedItems = {this.state.hairLength}
      /> 
      </View> 
      <View>
      <Text> What is your hair density</Text>
      <CheckBox center title = 'Low Density - Thin'
      iconRight iconType = 'material'
      checkedIcon = 'clear'
      uncheckedIcon = 'add'
      checkedColor = 'red'
      checked = {this.state.lowDensity}
      onPress = {() => this.setState({lowDensity: !this.state.lowDensity})}/> 
      <CheckBox center title = 'Medium Density - Not too thin, not too thick'
      iconRight iconType = 'material'
      checkedIcon = 'clear'
      uncheckedIcon = 'add'
      checkedColor = 'red'
      checked = {this.state.medDensity}
      onPress = {() => this.setState({medDensity: !this.state.medDensity})
      }/> 
      <CheckBox center title = 'High Density - Thick Hair'
      iconRight iconType = 'material'
      checkedIcon = 'clear'
      uncheckedIcon = 'add'
      checkedColor = 'red'
      checked = {this.state.highDensity}
      onPress = {() => this.setState({highDensity: !this.state.highDensity})
      }/> 
      </View> 
      <View>
      <Text> What is your hair porosity?</Text>
      <CheckBox center title = 'Low Porosity'
      iconRight iconType = 'material'
      checkedIcon = 'clear'
      uncheckedIcon = 'add'
      checkedColor = 'red'
      checked = {this.state.lowPorosity}
      onPress = {() => this.setState({lowPorosity: !this.state.lowPorosity})}/> 
      <CheckBox center title = 'Medium Porosity'
      iconRight iconType = 'material'
      checkedIcon = 'clear'
      uncheckedIcon = 'add'
      checkedColor = 'red'
      checked = {this.state.medPorosity}
      onPress = {() => this.setState({medPorosity: !this.state.medPorosity})
      }/> 
      <CheckBox center title = 'High Porosity'
      iconRight iconType = 'material'
      checkedIcon = 'clear'
      uncheckedIcon = 'add'
      checkedColor = 'red'
      checked = {this.state.highPorosity}
      onPress = {() => this.setState({highPorosity: !this.state.highPorosity})
      }/> 
      </View> 
      </View>
    );
  }
}

export default ProfileSetupScreen;