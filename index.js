/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import AppNavigator from './js/navigator/AppNavigator';
import {name as appName} from './app.json';
// import {createAppContainer} from 'react-navigation';
import App from './js/App';

AppRegistry.registerComponent(appName, () => App);