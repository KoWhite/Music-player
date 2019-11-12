import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {};
export default class AccountPage extends Component<Props> {

  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>AccountPage</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});