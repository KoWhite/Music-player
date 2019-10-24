import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

type Props = {};
export default class TrendingPage extends Component<Props> {

  render() {
    const {navigation} = this.props;
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>TrendingPage</Text>
          <Button 
            title = "改变主题色"
            onPress ={() => {
              navigation.setParams({
                theme: {
                  tintColor: 'red',
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