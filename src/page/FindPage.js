import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { SearchBar } from '@ant-design/react-native';

type Props = {};
export default class FindPage extends Component<Props> {
  constructor(props) {
    super(props);
    
  }


  render() {
    return <View>
      <View>
        <TextInput 
          style={{ height: 35, width: 300, borderRadius: 20, backgroundColor: '#f7f7f7' }}
        />
        <MaterialCommunityIcons 
          name={'music-note'}
          size={35}
        />
      </View>
      
    </View>
  }
}

const styles = StyleSheet.create({

  
});