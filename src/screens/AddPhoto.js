
import React,{ Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
 } from "react-native";

 import ImagePicker from "react-native-image-picker";
 import { connect } from "react-redux";
 import { addPost } from "../store/actions/post";

 const noUser = 'Você precisa estar logado para postar uma imagem!';

 class AddPhoto extends Component{
     state ={
         image:null,
         comment: '',
     }
    
     componentDidUpdate = prevProps => {
         if(prevProps.loading && !this.props.loading){
            this.setState({image:null, comment:''})
            this.props.navigation.navigate('Feed');
         }
     }
     pickImage = () => {
         if(!this.props.name){
             Alert.alert("Atenção",noUser);
             return
         }
         ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
         }, res => {
            if(!res.didCancel){
                this.setState({image: {uri:res.uri, base64:res.data}});
            }
         })
        
     }

     save = async () =>{
        if(!this.props.name){
            Alert.alert("Atenção",noUser);
            return
        }
        if(!this.state.image)
            return;
            
        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email, 
            image: this.state.image,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }]
        });       
     }

     render(){
         const styleButtom = this.props.loading ? styles.buttomDisabled : styles.buttom;
         return(
            <ScrollView>
                <View style={styles.container} >
                    <Text style={styles.text}>Compartilhe uma imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} 
                            style={styles.image}
                        />
                    </View> 
                    <TouchableOpacity onPress={this.pickImage} style={styleButtom} disabled={this.props.loading}>
                        <Text style={styles.buttomText}>Escolha a foto</Text>
                    </TouchableOpacity>
                    <TextInput 
                        placeholder='Algum comentário para a foto?'
                        style={styles.input}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({comment})}
                        editable={this.props.name != null}
                    />
                    <TouchableOpacity 
                        onPress={this.save} 
                        style={styleButtom} 
                        disabled={this.props.loading}>
                            <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
         );
     }
 }

 const styles = StyleSheet.create({
     container:{
         flex: 1,
         alignItems: 'center'
     },
     title:{
         fontSize: 20,
         marginTop: Platform.OS === 'ios' ? 30: 10,
         fontWeight: 'bold'
     },
     imageContainer:{
         width: '90%',
         height: Dimensions.get('window').width /2,
         backgroundColor: '#EEE',
         marginTop: 10
     },
     image: {
         width: '100%',
         height: Dimensions.get('window').width /2,
         resizeMode: 'center'
     },
     buttom:{
         marginTop: 30,
         padding: 10,
         backgroundColor: '#4286f4'
     },
     buttomDisabled: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#AAA'
     },
     buttomText:{
        fontSize: 20,
        color: '#fff'
     },
     input: {
         marginTop: 20,
         width: '90%'
     }

 });

 const mapStateToProps = ({user, post}) => ({
        email: user.email,
        name: user.name,
        loading: post.isUploading
 });

 const mapDispatchToProps = dispatch => ({
    onAddPost: post => dispatch(addPost(post))
 });

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);
