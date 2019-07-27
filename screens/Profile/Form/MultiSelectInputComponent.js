import React from "react";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { Text, View } from "react-native";

 
export function MultiSelectInput(itemsList, selectedItems, placeholderText, onChangeFunc) {
    return (
      <View>
        <SectionedMultiSelect 
          items = {itemsList}
          uniqueKey = "id"
          subKey = "children"
          iconKey = "icon"
          selectText = {placeholderText}
          showDropDowns = {false}
          readOnlyHeadings = {true}
          onSelectedItemsChange = {onChangeFunc}
          selectedItems={selectedItems}
          showCancelButton={true}
          modalWithTouchable={true}
          /> 
      </View>
    )
}