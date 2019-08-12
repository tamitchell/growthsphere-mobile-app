import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { styles } from "../constants/styles";
import { WebBrowser, LinearGradient } from 'expo';
import { Row, Grid} from 'react-native-easy-grid';



export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };


  render() {
    return (
      <Grid style={styles.container}>
          <Row>
            <View style={styles.centeredContainer}>
            <Text style={styles.title}>Growthsphere App</Text>
          <TouchableOpacity style={styles.mainButtonContainer} title="Start" onPress={() => this.props.navigation.navigate('ProfileSetup')}>
              <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
            </View>
          </Row>
          </Grid>
    )}};