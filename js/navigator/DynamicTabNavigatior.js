import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import NavigationUtil from './NavigationUtil';

const TABS = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
          tabBarLabel: '最热',
          tabBarIcon: ({tintColor, focused}) => {
            return <MaterialIcons
              name={'whatshot'}
              size = {26}
              style ={{color: tintColor}}
            />
          }
        }
      },
      TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
          tabBarLabel: '趋势',
          tabBarIcon: ({tintColor, focused}) => (
            <Ionicons
              name={'md-trending-up'}
              size = {26}
              style ={{color: tintColor}}
            />
          )
        }
      },
      FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
          tabBarLabel: '收藏',
          tabBarIcon: ({tintColor, focused}) => (
            <AntDesign
              name={'heart'}
              size = {26}
              style ={{color: tintColor}}
            />
          )
        }
      },
      MyPage: {
        screen: MyPage,
        navigationOptions: {
          tabBarLabel: '我的',
          tabBarIcon: ({tintColor, focused}) => (
            <AntDesign
              name={'smileo'}
              size = {26}
              style ={{color: tintColor}}
            />
          )
        }
      }
};

type Props = {};
export default class DynamicTabNavigatior extends Component<Props> {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

  _tabNavigator () {
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage}; // 根据需要定制显示的tab
    return createAppContainer(createBottomTabNavigator(tabs,{
      tabBarComponent: props => {
        return <TabBarComponent theme={this.props.theme} {...props}/>
      }
    }
    ))
  }

  render() {
    NavigationUtil.navigation = this.props.navigation;
    const Tab = this._tabNavigator();
    return <Tab/>
  }
}

class TabBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.theme = {
      thintColor: props.activeTintColor,
      upateTime: new Date().getTime(),
    }
  }

  render () {
    const {routes, index} = this.props.navigation.state;
    if (routes[index].params) {
      const {theme} = routes[index].params;
      if (theme && theme.updateTime > this.theme.updateTime) {
        this.theme = theme;
      }
    }
    return <BottomTabBar 
      {...this.props}
      activeTintColor = {this.theme.tintColor || this.props.activeTintColor}
    />
  }
}

const styles = StyleSheet.create({

});