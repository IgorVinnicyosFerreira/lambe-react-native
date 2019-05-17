import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback as TWF, Alert } from "react-native";
import  Icon from "react-native-vector-icons/FontAwesome";

class AddComment extends Component{
    state ={
        comment:'',
        editMode: false
    }

    handleAddComment = ()=>{
        Alert.alert('Adicionado!', this.state.comment);
    }

    render(){
        let commentArea = null;

        if(this.state.editMode){
            commentArea = (
                <View style={styles.containter}>
                    <TextInput style={styles.input}
                        autoFocus = {true}
                        placeholder = "Adicione um comentário..."
                        value = {this.state.comment}
                        onChangeText = { comment => this.setState({comment})}
                        onSubmitEditing = {this.handleAddComment}
                    />
                     <TWF onPress={() => this.setState({editMode: false})}>
                        <Icon name='times' size={20}/>
                     </TWF>
                </View>             
            )
        }else{
            commentArea = (
                <TWF onPress={() => this.setState({editMode:true})}>
                    <View style={styles.containter}>
                        <Icon name='comment-o' size={25} color='#555'/>
                        <Text style={styles.caption}>Adicione um comentário...</Text>
                    </View>
                </TWF>
            )
        }

        return (
            <View style={{flex:1}}>
                {commentArea}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containter:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    caption:{
        marginLeft: 10,
        fontSize: 12,
        color: '#ccc'
    },
    input:{
        width: '90%'
    }
});

export default AddComment;