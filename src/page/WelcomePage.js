import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

type Props = {};
export default class WelcomePage extends Component<Props> {
  
  componentDidMount() {
    this.timer = setTimeout(() => {
      const {navigation} = this.props;
      navigation.navigate('Main');
    }, 2000);
  }

  componentWillUnMount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Image source={require('/MP/resource/advertisement.jpg')} />
        </View>
    );
  }
}

const styles = StyleSheet.create({

});