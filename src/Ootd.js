import React from 'react'
import { View, Text,StyleSheet,Image,ScrollView} from 'react-native'

export default function home() {
    return (
        <ScrollView>
        <View>
            <Text style={styles.text1}>Select your fashion it on </Text> 
            <Text style={styles.text2}>PictureApp</Text>   
            <Image 
            style={styles.img}
            source={require('../src/ootd/image17.png')} />
            <Image 
            style={styles.img1}
            source={require('../src/ootd/image20.png')} />
            <Image 
            style={styles.img2}
            source={require('../src/ootd/image26.png')} />
            <Image 
            style={styles.img3}
            source={require('../src/ootd/image27.png')} />
            <Image 
            style={styles.img4}
            source={require('../src/ootd/image28.png')} />
            <Image 
            style={styles.img5}
            source={require('../src/ootd/image32.png')} />
            <Image 
            style={styles.img6}
            source={require('../src/ootd/image36.png')} />
            <Image 
            style={styles.img7}
            source={require('../src/ootd/image39.png')} />
            <Image 
            style={styles.img8}
            source={require('../src/ootd/image14.png')} />
            <Image 
            style={styles.img9}
            source={require('../src/ootd/image11.png')} />
            <Image 
            style={styles.img10}
            source={require('../src/ootd/image8.png')} />
            <Image 
            style={styles.img11}
            source={require('../src/ootd/image5.png')} />
            </View>
            </ScrollView>
    );
}
const styles = StyleSheet.create({
    text1:{
        fontSize:25,
        padding:25,
        fontFamily: 'Poppins-SemiBold'
    },
    text2:{
        fontSize:25,
        marginTop:-25,
        paddingLeft:25,
        fontFamily: 'Poppins-Italic',
    },
    img:{
        width:150,
        height:150,
        marginTop:20,
        marginLeft:10,
    },
    img1:{
        width:150,
        height:150,
        marginTop:-150,
        marginLeft:180,
    },
        img2:{
        width:150,
        height:150,
        marginTop:20,
        marginLeft:10,
    }, img3:{
        width:150,
        height:150,
        marginTop:-150,
        marginLeft:180,
    }, img4:{
        width:150,
        height:150,
        marginTop:20,
        marginLeft:10,
    }, img5:{
        width:150,
        height:150,
        marginTop:-150,
        marginLeft:180,
    }, img6:{
        width:150,
        height:150,
        marginTop:20,
        marginLeft:10,
    }, img7:{
        width:150,
        height:150,
        marginTop:-150,
        marginLeft:180,
    },
        img8:{
        width:150,
        height:150,
        marginTop:20,
        marginLeft:10,
    },
        img9:{
        width:150,
        height:150,
        marginTop:-150,
        marginLeft:180,
    },
        img10:{
        width:150,
        height:150,
        marginTop:20,
        marginLeft:10,
    },
        img11:{
        width:150,
        height:150,
        marginTop:-150,
        marginLeft:180,
},
});