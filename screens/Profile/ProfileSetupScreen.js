import React, { Component } from "react";
import { Text, ScrollView, Picker, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { hairTypes, hairLength } from "../../constants/hairstats";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { styles } from "../../constants/styles";

class ProfileSetupScreen extends Component {
  constructor() {
    super();
    this.state = {
      hairType: [],
      hairLength: "",
      hairDensity: "",
      hairPorosity: ""
    };
  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, What are your stats?</Text>
        <View>
        <SectionedMultiSelect
          items={ hairTypes } 
          uniqueKey='hairType'
          subKey='types'
          selectText='Choose your hair texture'
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.hairType}
        />
        </View>
        <View>
        <SectionedMultiSelect
          items={ hairLength } 
          uniqueKey='hairLength'
          subKey='lengthl'
          selectText='Choose your length'
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.hairLength}
        />
        </View>
        <View>
        <CheckBox
  center
  title='Low Density - Thin'
  iconRight
  iconType='material'
  checkedIcon='clear'
  uncheckedIcon='add'
  checkedColor='red'
  checked={this.state.checked}
/>
<CheckBox
  center
  title='Medium Density - Not too thin, not too thick'
  iconRight
  iconType='material'
  checkedIcon='clear'
  uncheckedIcon='add'
  checkedColor='red'
  checked={this.state.checked}
/>
<CheckBox
  center
  title='High Density - Thick Hair'
  iconRight
  iconType='material'
  checkedIcon='clear'
  uncheckedIcon='add'
  checkedColor='red'
  checked={this.state.checked}
/>
        </View>
      </View>
    );
  }
}

export default ProfileSetupScreen;
