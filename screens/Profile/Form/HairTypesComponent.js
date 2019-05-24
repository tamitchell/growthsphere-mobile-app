import React from "react";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';



export default function MultiSelectInput(items, placeholderText) {

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