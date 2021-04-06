import React, { Component } from 'react';
import { StyleSheet, View, Text,Image, TouchableOpacity} from 'react-native';
import firebase from '../src/Firebase';

export default class akun extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }
  deleteData() {
    firebase.database().ref('sign_Up' + userId).remove();
  }

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      email:firebase.auth().currentUser.email,
      uid: firebase.auth().currentUser.uid,
    }    
    return (
      <View>
        <Text style = {styles.textStyle}>
          Akun PictureApp
        </Text>
        <Image 
            style={styles.img}
            source={require('../src/album/img12.png')} />  
        <Text style={styles.text1}>
        {this.state.displayName}
        </Text>
        <Text style={styles.text2}>
        {this.state.email}
        </Text>
       

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.signOut()}>
              <Text style={styles.text3}>Logout</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginLeft:20,
    marginTop:50,
    fontFamily:'Poppins-SemiBold',
  },
  text1:{
    marginTop:-125,
    fontSize:25,
    marginLeft:120,
    fontFamily:'Poppins-SemiBold'
    
  },
  text2:{
    marginTop:0,
    fontSize:16,
    marginLeft:120,
    fontFamily:'Poppins-Thin'
  },
  text3:{
      fontSize:15,
      marginLeft:25,
      marginTop:8,
      fontFamily:'Poppins-Bold'

  },
  img:{
    width:70,
    height:70,
    marginHorizontal:15,
    marginVertical:60,
    
},
button:{
    height:40,
    width:100,
    backgroundColor:'#C4C4C4',
    marginVertical:10,
    marginLeft:120,
    borderRadius:10,

},
});
