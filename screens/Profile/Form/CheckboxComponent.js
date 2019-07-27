import React from "react";
import { CheckBox } from "react-native-elements";
import { Text, View } from "react-native";

export function CheckboxInput(containerTitle, checkboxText, checkedState, onToggleFunc) {
    <View>
    <Text>{{containerTitle}}</Text>
    <View>
        <CheckBox center 
        title={checkboxText}
        iconRight iconType='material'
        checkedIcon='clear'
        uncheckedIcon='add'
        checkedColor='red'
        checked={checkedState}
        onPress={onToggleFunc} />
    </View>
    </View>
    }