import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,TextInput,Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class CoreComponen extends Component {
    constructor(props) {
        super(props);
        this.state={
            Username:"",
            Password:'',
            Email:'',
        };
        
    }
  render() {
    return (
        <View style={styles.bg1}>
 
        <View >
            <Text style={styles.text2}>PictureApp</Text>
            <View>  
            <Image 
            style={styles.img}
            source={require('../src/album/camera.png')} />
            </View>    
        
        <View style ={styles.container}>   
         
        <TextInput 
            onChangeText ={(Username)=>this.setState({Username})}
            value={this.state.Username}
            placeholder='Username' 
            style={styles.formInput}
        />
        <TextInput 
            onChangeText={(Password)=>this.setState({Password})}
            value={this.state.Email}
            placeholder='Password' 
            style={styles.formInput}
        />   
         <TextInput 
            onChangeText={(Email)=>this.setState({Email})}
            value={this.state.Email}
            placeholder='Email' 
            style={styles.formInput}
        />   
         <TouchableOpacity 
         style ={styles.button}  > 
            <Text style={styles.text1}>Sukses</Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
    bg1:{
     flex:1,
     backgroundColor:'white',
    },
    container:{
     paddingHorizontal:18,
     marginVertical:20,


    },
    formInput:{
        height:50,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:18,
        padding:15,
        marginTop:15,
        
    },
    button:{
        height:50,
        width:150,
        backgroundColor:'#C4C4C4',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:18,
        marginVertical:15,
        marginHorizontal:85,
    },
    text1:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
    },
    text2:{
        fontSize:40,
        color:'black',
        paddingTop:50,
        textAlign:'center',
        fontFamily:'Poppins-SemiBold',
        

    },
    text5:{
        fontSize:20,
        marginTop:-2,
        marginLeft:129,
        textDecorationLine:'underline',        

    },
    img:{
        width:150,
        height:150,
        marginHorizontal:100,
        marginVertical:30,
        
    },

});
