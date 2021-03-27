import React from 'react'
import { View, Text,StyleSheet,Image,ScrollView} from 'react-native'

export default function home() {
    return (
        <ScrollView>
        <View>
            <Text style={styles.text1}>Nature is an endless combination and repetition </Text> 
            <Text style={styles.text2}>of a very few laws.</Text> 
            <Image 
            style={styles.img}
            source={require('../src/panorama/image37.png')} />  
            <Image 
            style={styles.img1}
            source={require('../src/panorama/image34.png')} />
             <Image 
            style={styles.img2}
            source={require('../src/panorama/image33.png')} />  
             <Image 
            style={styles.img3}
            source={require('../src/panorama/image29.png')} />  
              <Image 
            style={styles.img4}
            source={require('../src/panorama/image30.png')} />  
              <Image 
            style={styles.img5}
            source={require('../src/panorama/image21.png')} />  
              <Image 
            style={styles.img6}
            source={require('../src/panorama/image18.png')} />  
              <Image 
            style={styles.img7}
            source={require('../src/panorama/image15.png')} />  
            
            </View>
            </ScrollView>
    );
}
const styles = StyleSheet.create({
    text1:{
        fontSize:24,
        padding:25,
        fontFamily: 'Poppins-SemiBold'
    },
    text2:{
        fontSize:20,
        marginTop:-25,
        paddingLeft:25,
        fontFamily: 'Poppins-ExtraLightItalic',
    },
    img:{
        marginLeft:15,
        marginTop:60,
        width:160,
        height:240,
    },
    img1:{
        marginLeft:190,
        marginTop:-240,
        width:160,
        height:240,
    },
    img2:{
        marginLeft:15,
        marginTop:20,
        width:160,
        height:260,
    },
    img3:{
        marginLeft:190,
        marginTop:-240,
        width:160,
        height:240,
    },
    img4:{
        marginLeft:15,
        marginTop:20,
        width:160,
        height:260,
    },
    img5:{
        marginLeft:190,
        marginTop:-240,
        width:160,
        height:260,
    },
    img6:{
        marginLeft:15,
        marginTop:-10,
        width:160,
        height:260,
    },
    img7:{
        marginLeft:190,
        marginTop:-240,
        width:160,
        height:240,
    },
});