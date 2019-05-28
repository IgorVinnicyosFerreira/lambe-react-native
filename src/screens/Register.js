import React,{ Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
 } from "react-native";
 import { connect } from "react-redux";
 import { createUser } from "../store/actions/user";

 class Register extends Component{
    
    state = {
        email: '',
        password: ''
    }
    componentDidUpdate = prevProps =>{
        if(prevProps.isLoading && !this.props.isLoading){
            this.setState({
                name: '',
                email: '',
                password: ''
            });
           this.props.navigation.navigate('Profile');
        }
    }

     render(){
         return(
             <View style = {styles.container}>
                 <TextInput 
                        style={styles.input}
                        placeholder = 'Nome'
                        autoFocus = {true}
                        value = {this.state.name}
                        onChangeText = {name => this.setState({name})}
                 />
                 <TextInput 
                        style={styles.input}
                        placeholder='E-mail'
                        value={this.state.email}
                        keyboardType= 'email-address'
                        onChangeText={email=> this.setState({email})}
                 />
                 <TextInput 
                        style={styles.input}
                        placeholder='Senha'
                        value={this.state.password}
                        secureTextEntry
                        onChangeText={password=> this.setState({password})}
                 />
                 <TouchableOpacity onPress={()=>{ this.props.onCreateUser(this.state)}} style={styles.buttom} >
                        <Text style={styles.buttomText}>Salvar</Text>
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
     return{
        onCreateUser: user => dispatch(createUser(user))
     }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Register);