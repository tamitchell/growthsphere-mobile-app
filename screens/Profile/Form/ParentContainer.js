import React, { Component } from "react";
import HairTypeDetails from './HairTypeDetails'
import PersonalDetails from './PersonalDetails'
import FormConfirmation from './FormConfirmation'


export default class ParentForm extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      user: {
      username: "",
      email: "",
      phoneNumber: ""
    },
      hairTypes:[],
      hairLength: "",
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

  nextStep = () => {
      const { step } = this.state
      this.setState({
          step: step + 1
        })
        console.log(step)
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
        step: step - 1
    })
}

    handleChange = (input) => e => {
    this.setState({[input]: e.target.value})
    }

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

      componentDidUpdate() {
          console.log(this.state)
      }

  render() {
      const { step } = this.state
      const { user, hairTypes, hairLength, checkedDensity, checkedPorosity } = {...this.state}
      const values = { user, hairTypes, hairLength,  checkedDensity, checkedPorosity }
      switch (step) {
          case 1:
              return (<PersonalDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />)
              break;
          case 2:
                return (<HairTypeDetails 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                onCheckedPorosity={this.onCheckedPorosity}
                onCheckedDensity={this.onCheckedDensity}
                handleChange={this.handleChange}
                values={values}
                />)
                break;
          case 3:
            return (<FormConfirmation
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />)
            break;
          case 4:
                return (<h1>Message Sent</h1>)
      }
    return (
        <h1>hi</h1>
    );
  }
}
