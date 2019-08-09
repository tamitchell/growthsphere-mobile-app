import React, {Component} from "react";
import { hairTypes, hairLength } from '../../../constants/hairstats';
import {MultiSelectInput} from './MultiSelectInputComponent';
import { CheckBox } from "react-native-elements";
import { forms_text } from "../../../constants/text";
import { Text, View } from "react-native";


export default class Form extends Component {
    constructor() {
        super();
        this.state = {
          hairTypes:[],
          hairLength: [],
          hairPorosity: [],
          checkedDensity: {
            lowDensity: false,
            medDensity: false,
            highDensity: false
          },
          checkedPorosity: {
            lowPorosity: false,
            medPorosity: false,
            highPorosity: false
        }
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

      onCheckedPorosity = (name) => {
        let { checkedPorosity } = {...this.state}
        checkedPorosity[name] = !checkedPorosity[name]
        this.setState({checkedPorosity: checkedPorosity})
      }

      onCheckedDensity = (name) => {
        let { checkedDensity } = {...this.state}
        checkedDensity[name] = !checkedDensity[name]
        this.setState({checkedDensity: checkedDensity})
      }
      
      
      render() {
          return(
            <View>
              {MultiSelectInput(hairTypes, this.state.hairTypes, forms_text.HAIR_TYPE_SELECT, this.onSelectedHairTypeChange)}
              {MultiSelectInput(hairLength, this.state.hairLength, forms_text.HAIR_LENGTH_SELECT, this.onSelectedHairLengthChange)}
              <View>
                <Text>{forms_text.HAIR_POROSITY}</Text> 
              {Object.keys(forms_text.POROSITY_LVL).map((lvl, i) => {
                return (    
                <View key={i}>
                  <CheckBox center 
                  key={lvl}
                  title={forms_text.POROSITY_LVL[lvl]}
                  iconRight iconType='material'
                  checkedIcon='clear'
                  uncheckedIcon='add'
                  checkedColor='green'
                  checked={this.state.checkedPorosity[lvl]}
                  onPress={() => this.onCheckedPorosity(lvl)} />
              </View>)
              })}
              </View>

              <View>
                <Text>{forms_text.HAIR_DENSITY}</Text> 
              {Object.keys(forms_text.DENSITY_LVL).map((lvl, i) => {
                return (    
                <View key={i}>
                  <CheckBox center 
                  key={lvl}
                  title={forms_text.DENSITY_LVL[lvl]}
                  iconRight iconType='material'
                  checkedIcon='clear'
                  uncheckedIcon='add'
                  checkedColor='green'
                  checked={this.state.checkedDensity[lvl]}
                  onPress={() => this.onCheckedDensity(lvl)} />
              </View>)
              })}
              </View>
            </View>
          )
      }
}

