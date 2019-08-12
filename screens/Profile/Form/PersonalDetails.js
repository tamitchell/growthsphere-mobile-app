import React from "react";
import { Text, View, TouchableOpacity  } from "react-native";
import { Icon, Button, Item, Input, Label } from 'native-base';
import {styles} from '../../../constants/styles'
import { Row, Grid} from 'react-native-easy-grid';


const PersonalDetails = (props) => {
    return (
            <Grid style={styles.container}>
                <Row style={styles.headingContainer}>
                    <Text stlye={{fontSize: 64}}>Sign Up</Text>
                </Row>
                <Row>
                    <View style={styles.centeredContainer}>
                    <Item style={{width: '90%'}} stackedLabel>
                    <Label>
                        <Text>
                            Username
                        </Text>
                    </Label>
                    <Input onChange={props.handleChange}/>
                    </Item>
                    <Item style={{width: '90%'}} stackedLabel>
                    <Label>
                        <Text>
                            Password
                        </Text>
                    </Label>
                    <Input onChange={props.handleChange}/>
                    </Item>
                    </View>
            </Row>


                    <Row>
                <View style={styles.bottomContainer}>
                <Button style={styles.buttonRight} onPress={props.nextStep} iconRight transparent>
                    <Text>Next</Text>
                    <Icon style={styles.icon} name='arrow-forward' />
                </Button >
                </View>
                </Row>
            </Grid>
    );
}

export default PersonalDetails