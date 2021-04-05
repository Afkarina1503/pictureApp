import React from 'react'
import { View, Text,StyleSheet,Image,ScrollView,ImageBackground} from 'react-native'

export default function home() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <ImageBackground
            source={require('../src/album/bg1.png')}
            style={styles.ImageBackground}
            />
            <Image 
            source={require('../src/album/camera.png')}
            style={styles.gambar}
            />
            <Text style={styles.text1}>Welcome PictureApp</Text> 
            <Text style={styles.text2}>Explore Best Photo</Text> 
           
            </View> 
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
             <Image 
            style={styles.img6}
            source={require('../src/album/gambar8.png')} />
             <Image 
            style={styles.img7}
            source={require('../src/album/gambar9.png')} />
            </View>
            </ScrollView>

    )
}
const styles = StyleSheet.create({ 
    container:{
        flex:1,
    },
    text1:{
        fontSize:26,
        padding:25,
        fontFamily:'Poppins-SemiBold',
        position:'absolute'
        
        
    },
    text2:{
        fontSize:20,
        marginTop:60,
        paddingLeft:25,
        fontFamily: 'Poppins-Thin',
        position:'absolute'
    },
    img:{
        width:160,
        height:230,
        borderRadius:15,
        marginLeft:15,
        marginTop:30,
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
    img6:{
        width:160,
        height:220,
        borderRadius:15,
        marginLeft:15,
        marginTop:30,
    },
    img7:{
        width:160,
        height:230,
        borderRadius:15,
        marginLeft:190,
        marginTop:-230,
    },
    ImageBackground:{
        flex:1,
        resizeMode:'cover',
        width:400,
        height:150,
        marginTop:0,
    },
    gambar:{
        width:70,
        height:70,
        position:'absolute',
        marginLeft:260,
        marginTop:60,
            
    },
});
