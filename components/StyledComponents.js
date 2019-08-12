import React from 'react'
import { View } from "react-native";
import {styles} from '../constants/styles'


const Container = (props) => {
    return <View style={styles.container}>{props.componentName}</View>
}

const Row = (content) => {
    return <View style={styles.row}>{content}</View>
}

const Col = (content) => {
    return <View style={styles.col}>{content}</View>
}

export {Container, Col, Row}