import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

type Props = {};
import NavigationUtil from '../navigator/NavigationUtil';
import DynamicTabNavigatior from '../navigator/DynamicTabNavigatior';

export default class HomePage extends Component<Props> {
  
  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigatior />
  }
}

const styles = StyleSheet.create({

});