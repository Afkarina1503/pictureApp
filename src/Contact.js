import React from 'react'
import { View, Text,StyleSheet,Image,ScrollView} from 'react-native'

export default function home() {
    return (
        <ScrollView>
        <View>
            <Text style={styles.text1}>Profile</Text> 
            <Text style={styles.text2}></Text>
            <Image style={styles.img1}
            source={require('../src/album/nomer1.png')}  />
             <Text style={styles.text3}>Username:</Text>
             <Text style={styles.text4}>Email:</Text>
             <Text style={styles.text5}>The harder you try, the more enjoyable it will be when you succeed.</Text>
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
                width:300,
                height:300,
                marginLeft:70,
            },
            text3:{
                fontSize:23,
                fontFamily:'Poppins-Italic',
                padding:10,
            },
            text4:{
                fontSize:23,
                fontFamily:'Poppins-Italic',
                padding:10,
            },
            text5:{
                fontSize:23,
                fontFamily:'Poppins-Thin',
                paddingTop:70,
            },
        });