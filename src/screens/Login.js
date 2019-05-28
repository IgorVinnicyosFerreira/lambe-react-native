import React,{ Component } from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/user";

import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
 } from "react-native";

 class Login extends Component{
     state = {
        name: 'Temp',
        email: '',
        password: ''
     }

     componentDidUpdate = prevProps =>{
         if(prevProps.isLoading && !this.props.isLoading){
            this.props.navigation.navigate('Profile');
         }
     }

     login = () => {
         this.props.onLogin({...this.state})      
     }

    render(){
        const buttomStyle = this.props.isLoading ? styles.buttomDisabled : styles.buttom;
        
        return(
            <View style = {styles.container}>
                <TextInput 
                    placeholder = 'E-mail'
                    style={styles.input}
                    autoFocus = {true}
                    keyboardType='email-address'
                    value = {this.state.email}
                    onChangeText = {email => this.setState({email})}
                />
                <TextInput 
                    placeholder = 'Senha'
                    style={styles.input}
                    secureTextEntry = {true}
                    value = {this.state.password}
                    onChangeText = {password => this.setState({password})}
                />
                <TouchableOpacity style={buttomStyle} onPress={this.login}>
                    <Text style={styles.buttomText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttomStyle} onPress={()=>{
                     this.props.navigation.navigate('Register')
                }}>
                    <Text style={styles.buttomText}>Criar nova conta</Text>
                </TouchableOpacity>
            </View>
        );
    }
 }
 const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    buttomDisabled: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#AAA'
     },
    buttomText: {
        fontSize: 20,
        color: '#fff'
    },
    input:{
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    }
});

const mapStateToProps = ({user}) => ({
    isLoading: user.isLoading
});

const mapDispatchToProps = dispatch =>{
    return {
        onLogin: user => dispatch(login(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);