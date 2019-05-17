import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Gravatar} from 'react-native-gravatar';

class Author extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Gravatar options={
                    {
                        email: this.props.email,
                        secure: true
                    }
                }
                style={styles.avatar} />
                <Text style={styles.nickname}>{this.props.nickname}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10
    },
    nickname:{
        color: '#444',
        marginVertical: 10,
        fontSize: 10,
        fontWeight: 'bold'
    }
});

export default Author;