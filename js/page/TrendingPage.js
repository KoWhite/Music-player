import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import actions from '../action/index'

type Props = {};
class TrendingPage extends Component<Props> {

  render() {
    // const {navigation} = this.props;
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>TrendingPage</Text>
          <Button 
            title = "改变主题色"
            onPress ={() => {
              this.props.onThemeChange('#096')
            }}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage);
