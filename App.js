
import React, {Component} from 'react';
import { View, Text } from "react-native";
import Header  from "./src/components/Header";
import Post from "./src/components/Post";
import fence from './assets/imgs/fence.jpg';

export default class App extends Component {
  render() {
    const comments = [
      {
        nickname: 'Joana Elena Silva',
        comment: 'Excelente Foto'
      },
      {
        nickname: 'Igor Ferreira',
        comment: 'Wooow! Até parece que fui eu que fiz haha XD'
      },
      {
        nickname: 'Joaozinho0504',
        comment: 'Eca! faço melhor... zzz'
      }
    ];
    return (
      <View style={{flex:1}}>
        <Header/>
        <Post image={fence} 
            comments={comments}
        />
      </View>
    );
  }
}
