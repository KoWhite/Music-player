import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import NavigationUtil from '../navigator/NavigationUtil'

type Props = {};
export default class PopularPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.tabNames = ['Java', 'PHP', 'JavaScript', 'IOS', 'React Native'];
  }

  _genTabs() {
    const tabs = {};
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        // 传参数的技巧
        screen: props => <PopularTab {...props} tabLabel={item}/>,
        navigationOptions: {
          title: item
        }
      }
    });
    return tabs;
  }

  render() {
    const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
      this._genTabs(), {
        tabBarOptions:{
          tabStyle: styles.tabStyle,
          upperCaseLabel: false, // 是否使用标签大写， 默认为true
          scrollEnabled: true, // 是否支持，选项卡滚动，默认为false
          indicatorStyle: styles.indicatorStyle, // 选项卡底部样式
          labelStyle: styles.labelStyle,
          style: {
            backgroundColor: '#678'
          }
        }
      }
    ));

    return <View style={{flex: 1, marginTop: 0}}>
      <TabNavigator/>
    </View>
  }
}

class PopularTab extends Component<Props> {

  render() {
    const {tabLabel} = this.props;
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>{tabLabel}</Text>
          <Text onPress={()=> {
            NavigationUtil.goPage({
              navigation: this.props.navigation
            }, 'DetailPage')
          }}>跳转到详情页</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  tabStyle: {
    minWidth: 50
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: '#fff'
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6
  }
});