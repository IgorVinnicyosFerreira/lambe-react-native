
import React, {Component} from 'react';
import { View, Text } from "react-native";
import Header  from "./src/components/Header";
import Post from "./src/components/Post";
import fence from './assets/imgs/fence.jpg';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header/>
        <Post image={fence}/>
      </View>
    );
  }
}
