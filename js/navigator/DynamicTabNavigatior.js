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
import {connect} from 'react-redux';

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
class DynamicTabNavigatior extends Component<Props> {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

  _tabNavigator () {
    if (this.Tabs) {
      return this.Tabs;
    }
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage}; // 根据需要定制显示的tab
    return this.Tabs = createAppContainer(createBottomTabNavigator(tabs,{
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
    return <BottomTabBar 
      {...this.props}
      activeTintColor = {this.props.theme}
    />
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = state => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNavigatior);
