import React from "react";
import { hairTypes, hairLength } from '../../../constants/hairstats';
import { MultiSelectInput } from './MultiSelectInputComponent';
import { CheckBox } from "react-native-elements";
import { forms_text } from "../../../constants/text";
import { Text, View , Image, ScrollView} from "react-native";
import { Icon, Button } from 'native-base';
import { styles } from '../../../constants/styles'
import { Row, Col, Grid } from 'react-native-easy-grid';



const HairTypeDetails = (props) => {
  return (
    <Grid style={styles.container}>

      <Row>
        <View style={styles.centeredContainer}>
          {MultiSelectInput(hairTypes, props.hairTypes, forms_text.HAIR_TYPE_SELECT, props.handleChange)}
          {MultiSelectInput(hairLength, props.hairLength, forms_text.HAIR_LENGTH_SELECT, props.handleChange)}
        </View>
      </Row>


      <Row>
      <View style={styles.centeredContainer}>
        <Col style={{borderWidth: 1, borderColor: 'orange', width: '100%', padding: 10}}>
        <Text>{forms_text.HAIR_POROSITY}</Text>
        </Col>
        <Row style={styles.centeredContainer}>
        {Object.keys(forms_text.POROSITY_LVL).map((lvl, i) => {
          return (
            <View style={{width: '33%'}} key={i}>
              <Button center
                key={lvl}
                title={forms_text.POROSITY_LVL[lvl]}
                containerStyle={props.values.checkedPorosity[lvl] ? styles.checkedOutline : styles.uncheckedOutline}
                checkedIcon={null}
                uncheckedIcon={null}
                checkedColor={null}
                checked={props.values.checkedPorosity[lvl]}
                onPress={() => props.onCheckedPorosity(lvl)} />
            </View>)
        })}
        </Row>
      </View>
      </Row>

      <Row>
        <View style={styles.centeredContainer}>
        <Col  style={{borderWidth: 1, borderColor: 'orange', width: '100%', padding: 10}}>
        <Text>{forms_text.HAIR_DENSITY}</Text>
        </Col>
        <Row style={styles.centeredContainer}>
        {Object.keys(forms_text.DENSITY_LVL).map((lvl, i) => {
          console.log(typeof lvl)
          return (
            <View style={{width: '33%'}} key={i}>
               <Button
                key={lvl}
                style={props.values.checkedDensity[lvl] ? styles.checkedOutline : styles.uncheckedOutline}
                onPress={() => props.onCheckedDensity(lvl)}>
                  {/* <Image source={require(`../../../assets/images/${lvl}.png`)} /> */}
                  <Text>{forms_text.DENSITY_LVL[lvl]}</Text>
                  </Button>
            </View>)
        })}
        </Row>
        </View>
      </Row>


      <Row style={styles.bottomContainer}>
        <Button style={styles.buttonLeft} onPress={props.prevStep} iconLeft light>
          <Icon name='arrow-back' />
          <Text>Back</Text>
        </Button>
        <Button style={styles.buttonRight} onPress={props.nextStep} iconRight light>
          <Text>Next</Text>
          <Icon name='arrow-forward' />
        </Button>
      </Row>
    </Grid>
  );
}

export default HairTypeDetails;
