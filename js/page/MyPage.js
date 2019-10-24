import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

type Props = {};
export default class MyPage extends Component<Props> {

  render() {
    const {navigation} = this.props
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>MyPage</Text>
          <Button 
            title = "改变主题色"
            onPress ={() => {
              navigation.setParams({
                theme: {
                  tintColor: 'blue',
                  updateTime: new Date().getTime()
                }
              })
            }}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({

});