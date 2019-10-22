import {
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
    } from "react-navigation";

// 版本更新新形势
import { 
    createStackNavigator 
} from 'react-navigation-stack';

import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions:() => ({
            header: null,
        }),
    }
});

const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions:() => ({
            header: null,
        }),
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions:() => ({
            header: null,
        }),
    }
});

export default createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
},{
    navigationOptions:() => ({
        header: null,
    }),
})