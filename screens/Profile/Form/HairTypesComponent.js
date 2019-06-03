import React, {Component} from "react";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {hairTypes,hairLength} from "../../constants/hairstats";

class Form extends Component {
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
      render() {
          return(
            MultiSelectInput(hairTypes, forms_text.HAIR_TYPE_SELECT),
            MultiSelectInput(hairLength, forms_text.HAIR_Length_SELECT)


          );
      }
}

export function MultiSelectInput(items, placeholderText) {
    return (
    <SectionedMultiSelect 
      items = {items}
      uniqueKey = "id"
      subKey = "children"
      iconKey = "icon"
      selectText = {placeholderText}
      showDropDowns = {true}
      readOnlyHeadings = {true}
      onSelectedItemsChange = {this.onSelectedItemsChange}
      selectedItems = {this.state.selectedItems}
      /> 
    )
}