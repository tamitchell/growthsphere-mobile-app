import React, {Component} from "react";
import {Text,View} from "react-native";
import ParentForm from "./Form/ParentContainer";



export default class ProfileSetupScreen extends Component {
  constructor() {
    super()
  }

  render() {
    return ( 
      <ParentForm/>
    );
  }
}
