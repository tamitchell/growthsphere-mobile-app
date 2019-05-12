import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { styles } from "../constants/styles";
import { WebBrowser, LinearGradient } from 'expo';


export default class HomeScreen extends React.Component {
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
      <View style={styles.container}>
      <LinearGradient  
        colors={['#dc7272', '#e78880', '#fbb69d']}
        style={{flex: 1}}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/home-icon.png')
                  : require('../assets/images/home-icon.png')
              }
              style={styles.welcomeImage}
            />
          <View style={styles.helpContainer}>
              <Button title="Start" style={styles.mainButton} onPress={() => this.props.navigation.navigate('ProfileSetup')}></Button>
          </View>
          </View>
        </ScrollView>
      </LinearGradient>
      </View>
    )}};