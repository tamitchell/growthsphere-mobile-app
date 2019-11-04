import React from "react";
import { hairTypes, hairLength } from '../../../constants/hairstats';
import { MultiSelectInput } from './MultiSelectInputComponent';
import { forms_text } from "../../../constants/text";
import { Text, View , Image, ActivityIndicator} from "react-native";
import { Icon, Button } from 'native-base';
import { styles } from '../../../constants/styles'
import { Row, Col, Grid } from 'react-native-easy-grid';
import ActionSheetIconExample from '../../../components/MoreInfoActionSheet'

let porosityExampleImg = {
  lowPorosity: require('../../../assets/images/lowPorosity.png'),
  medPorosity: require('../../../assets/images/medPorosity.png'),
  highPorosity: require('../../../assets/images/highPorosity.png')
}

let densityExampleImg = {
  lowDensity: require('../../../assets/images/lowDensity.png'),
  medDensity: require('../../../assets/images/mediumDensity.png'),
  highDensity: require('../../../assets/images/highDensity.png')
}



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
        <Col style={{width: '100%', padding: 10}}>
          <View style={styles.sideBySideContainer}> 
        <Text>{forms_text.HAIR_POROSITY}</Text> 
        <ActionSheetIconExample/>
          </View>
        </Col>
        <Row style={styles.centeredContainer}>
        {Object.keys(forms_text.POROSITY_LVL).map((lvl, i) => {
          return (
            <View style={{width: '33%'}} key={i}>
              <Button center
                key={lvl}
                style={props.values.checkedPorosity[lvl] ? styles.checkedOutline : styles.uncheckedOutline}
                onPress={() => props.onCheckedPorosity(lvl)}>
                  <Image style={styles.checkboxBtnImg} source={porosityExampleImg[lvl]} PlaceholderContent={<ActivityIndicator />}/>
                  <Text style={{textAlign: 'center', width: '100%'}}>{forms_text.POROSITY_LVL[lvl]}</Text>
                </Button>
            </View>)
        })}
        </Row>
      </View>
      </Row>

      <Row>
        <View style={styles.centeredContainer}>
        <Col  style={{width: '100%', padding: 10}}>
        <Text>{forms_text.HAIR_DENSITY}</Text>
        </Col>
        <Row style={styles.centeredContainer}>
        {Object.keys(forms_text.DENSITY_LVL).map((lvl, i) => {
          return (
            <View style={{width: '33%'}} key={i}>
               <Button
                key={lvl}
                style={props.values.checkedDensity[lvl] ? styles.checkedOutline : styles.uncheckedOutline}
                onPress={() => props.onCheckedDensity(lvl)}>
                  <Image style={styles.checkboxBtnImg} source={densityExampleImg[lvl]} PlaceholderContent={<ActivityIndicator />}/>
                  <Text style={{textAlign: 'center', textAlignVertical: 'bottom', width: '100%'}}>{forms_text.DENSITY_LVL[lvl]}</Text>
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
