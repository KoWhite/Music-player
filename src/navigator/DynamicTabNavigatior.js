import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FindPage from '../page/FindPage';
import VideoPage from '../page/VideoPage';
import SocialPage from '../page/SocialPage';
import MyPage from '../page/MyPage';
import AccountPage from '../page/AccountPage';
import NavigationUtil from './NavigationUtil';
import {connect} from 'react-redux';

const TABS = {
  FindPage: {
        screen: FindPage,
        navigationOptions: {
          tabBarLabel: '发现',
          tabBarIcon: ({tintColor, focused}) => {
            return <MaterialCommunityIcons
              name={'cloud-search'}
              size = {26}
              style ={{color: tintColor}}
            />
          }
        }
      },
      VideoPage: {
        screen: VideoPage,
        navigationOptions: {
          tabBarLabel: '视频',
          tabBarIcon: ({tintColor, focused}) => (
            <Entypo
              name={'video'}
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
            <FontAwesome
              name={'music'}
              size = {26}
              style ={{color: tintColor}}
            />
          )
        }
      },
      SocialPage: {
        screen: SocialPage,
        navigationOptions: {
          tabBarLabel: '云村',
          tabBarIcon: ({tintColor, focused}) => (
            <Foundation
              name={'social-myspace'}
              size = {26}
              style ={{color: tintColor}}
            />
          )
        }
      },
      AccountPage: {
        screen: AccountPage,
        navigationOptions: {
          tabBarLabel: '账号',
          tabBarIcon: ({tintColor, focused}) => (
            <MaterialCommunityIcons
              name={'account'}
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
    const {FindPage, VideoPage, MyPage, SocialPage,  AccountPage} = TABS;
    const tabs = {FindPage, VideoPage, MyPage, SocialPage,  AccountPage}; // 根据需要定制显示的tab
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
