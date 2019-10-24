/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import AppNavigator from './navigator/AppNavigators';
import store from './store'

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
        <AppNavigator/>
    </Provider>
  );
};

export default App;
