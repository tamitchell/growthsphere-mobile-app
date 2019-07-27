import React, {Component} from "react";
import { hairTypes, hairLength } from '../../../constants/hairstats';
import {MultiSelectInput} from './MultiSelectInputComponent';
import {CheckboxInput} from './CheckboxComponent';
import { forms_text } from "../../../constants/text";
import { Text, View } from "react-native";


export default class Form extends Component {
    constructor() {
        super();
        this.state = {
          hairTypes:[],
          hairLength: [],
          hairPorosity: [],
          lowDensity: false,
          medDensity: false,
          highDensity: false,
          lowPorosity: false,
          medPorosity: false,
          highPorosity: false
        };
      }
    
      onSelectedHairTypeChange = (selectedItems) => {
        this.setState({
          hairTypes: selectedItems
        });
      };
      onSelectedHairLengthChange = (selectedItems) => {
        this.setState({
         hairLength: selectedItems
        });
      };

      onCheckboxToggle = (selectedItem, selectedItemParent) => {
        this.setState({
          selectedItemParent: !selectedItem
        })
      }

      componentDidUpdate() {
        console.log(this.state)
      }
    


      render() {
          return(
            <View>
              {MultiSelectInput(hairTypes, this.state.hairTypes, forms_text.HAIR_TYPE_SELECT, this.onSelectedHairTypeChange)}
              {MultiSelectInput(hairLength, this.state.hairLength, forms_text.HAIR_LENGTH_SELECT, this.onSelectedHairLengthChange)}
              {CheckboxInput()}
            </View>
          )
      }
}

