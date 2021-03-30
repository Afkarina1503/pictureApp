import React from 'react'
import { View, Text,StyleSheet,Image,ScrollView} from 'react-native'

export default function home() {
    return (
        <ScrollView>
        <View>
            <Text style={styles.text1}>Profile</Text> 
            <Text style={styles.text2}></Text>
            <Image style={styles.img1}
            source={require('../src/album/user.png')}  />
             <Text style={styles.text3}>Username</Text>
             <Text style={styles.text4}>Email</Text>
            </View>
            </ScrollView>
            )
        }
        const styles = StyleSheet.create({
            text1:{
                fontSize:30,
                padding:25,
                fontFamily: 'Poppins-SemiBold',
                fontWeight:'bold',
                
            },
            text2:{
                fontSize:20,
                marginTop:-20 ,
                paddingLeft:25,
                fontFamily: 'Poppins-Italic',
            },
            img1:{
                width:100,
                height:100,
                marginLeft:130,
            },
            text3:{
                fontSize:20,
                fontFamily:'Poppins-Italic',
                padding:10,
                marginTop:60,
                paddingLeft:130,
            },
            text4:{
                fontSize:20,
                fontFamily:'Poppins-Italic',
                padding:10,
                paddingLeft:150,
            },
        });