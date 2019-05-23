import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback as TWF, Alert } from "react-native";
import  Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { addComment } from "../store/actions/post";

class AddComment extends Component{
    state ={
        comment:'',
        editMode: false
    }

    handleAddComment = ()=>{
        this.props.onAddComment({
            postId: this.props.postId,
            comment: {
                 nickname: this.props.name,
                 comment: this.state.comment
            }
            
        });
        this.setState({comment: '', editMode: false});
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

const mapStateToProps = ({user}) => ({
    name: user.name,
});

const mapDispatchToProps = dispatch =>({
    onAddComment: payload => dispatch(addComment(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddComment);