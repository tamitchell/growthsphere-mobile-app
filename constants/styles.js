import React from 'react';
import {  StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    containerFluid: {
      backgroundColor: '#eee'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5
          },
      topContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        maxWidth: '90%',
        height: '100%'
          },
      centeredContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '90%',
        height: '100%'
          },
      bottomContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flex: 0,
        flexShrink: 1,
        minHeight: 50,
        width: '90%',
        margin: 20,
        padding: 10,
      },
      item: {
        maxWidth: '80%'
      },
      headingContainer: {
        flex: 0,
        flexShrink: 1,
        margin: 20,
        padding: 20
      },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    buttonRight: {
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 0,
      width: 100,
      padding: 5
    },
    buttonLeft: {
      alignSelf: 'flex-start',
      position: 'absolute',
      bottom: 0,
      width: 100,
      padding: 5
    },
    checkedOutline: {
      backgroundColor: 'transparent',
      width: 100,
      height: 100,
      padding: 5,
      textAlign: 'center',
      borderWidth: 2,
      borderColor: '#30e192'
    },
    uncheckedOutline: {
      backgroundColor: 'transparent',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: 100,
      height: 100,
      textAlign: 'center',
      padding: 5,
      borderWidth: 2,
      borderColor: '#aaa'
    },
    checkboxBtnImg: {
      width: 50,
      height: 50,
      margin: 10,
      maxWidth: 50
    },
    sideBySideContainer: {
      flexDirection: 'row'
    },
    tooltipBtn: {
      backgroundColor: '#33b5e5',
      width: 20,
      height: 20,
      borderRadius: 100,
      marginLeft: 5
    },
    contentContainer: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 30,
    },
    nextButton: {
      justifyContent: 'flex-end',
      padding: 5,
      marginTop: 30,
    },
    icon: {
      paddingLeft: 5,
    },
    welcomeContainer: {
        alignItems: 'center',
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    title: {
      fontSize: 32,
      color: '#aaa',
      marginBottom: 30,
    },
    buttonText: {
      fontSize: 17,
      textAlign: 'center',
      textTransform: 'uppercase',
      padding: 10,
      color: 'white',
    },
    mainButtonContainer: {
      width: 150,
      marginTop: 30,
      backgroundColor: '#30e192'
    }
  });

  export {styles};