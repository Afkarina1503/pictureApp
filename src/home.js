import React from 'react'
import { View, Text,StyleSheet,Image,ScrollView} from 'react-native'

export default function home() {
    return (
        <ScrollView>
        <View>
            <Text style={styles.text1}>Explore Best Photo</Text> 
            <Text style={styles.text2}>Beautiful Photo</Text>   
            <View> 
           
            <Image 
            style={styles.img}
            source={require('../src/album/gambar1.png')} />
            <Image 
            style={styles.img1}
            source={require('../src/album/gambar2.png')} />
            <Image 
            style={styles.img2}
            source={require('../src/album/gambar4.png')} />
              <Image 
            style={styles.img3}
            source={require('../src/album/gambar5.png')} />
            <Image 
            style={styles.img4}
            source={require('../src/album/gambar6.png')} />
             <Image 
            style={styles.img5}
            source={require('../src/album/gambar7.png')} />
            </View>
            </View> 
            </ScrollView>

    )
}
const styles = StyleSheet.create({
    text1:{
        fontSize:26,
        padding:25,
        fontFamily: 'Poppins-SemiBold'
    },
    text2:{
        fontSize:20,
        marginTop:-25,
        paddingLeft:25,
        fontFamily: 'Poppins-Italic',
    },
    img:{
        width:160,
        height:230,
        borderRadius:15,
        marginLeft:15,
        marginTop:60,
    },
    img1:{
        width:160,
        height:230,
        borderRadius:15,
        marginLeft:190,
        marginTop:-190,
    },
    img2:{
        width:160,
        height:220,
        borderRadius:15,
        marginLeft:15,
        marginTop:-20,
    },
    img3:{
        width:160,
        height:220,
        borderRadius:15,
        marginLeft:190,
        marginTop:-180,

    },
    img4:{
        width:160,
        height:215,
        borderRadius:15,
        marginLeft:15,
        marginTop:-20,
    },
    img5:{
        width:160,
        height:150,
        borderRadius:15,
        marginLeft:190,
        marginTop:-160,
    },

});
