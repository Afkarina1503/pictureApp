import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'

export default function home({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Text style={styles.text1}>Choose According to</Text>
                <Text style={styles.text2}>your wishes!!!!</Text>
                <Image 
                source={require('../src/album/camera.png')}
                style={styles.gambar}
                />
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Ootd')}>
                        <Image
                            style={styles.img}
                            source={require('../src/album/foto1.png')} />
                        <Text style={styles.text3}>Ootd</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('food')}>

                    <Image
                        style={styles.img1}
                        source={require('../src/album/2.png')} />
                        <Text style={styles.text4}>Food Aestetic</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('panorama')}>
                    <Image
                        style={styles.img4}
                        source={require('../src/album/foto3.png')} />
                         <Text style={styles.text5}>Beautiful Panorama</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    text1: {
        fontSize: 29,
        padding: 25,
        fontFamily: 'Poppins-Bold'
    },
    text2: {
        fontSize: 20,
        marginTop: -25,
        paddingLeft: 25,
        fontFamily: 'Poppins-Medium',
    },
    text3:{
        position:'absolute',
        fontSize:25,
        color:'white',
        marginLeft:145,
        marginTop:110,
        fontFamily:'Poppins-SemiBold'
    },
    text4:{
        position:'absolute',
        fontSize:25,
        color:'white',
        marginLeft:100,
        marginTop:90,
        fontFamily:'Poppins-SemiBold'
    },
    text5:{
        position:'absolute',
        fontSize:25,
        color:'white',
        marginLeft:60,
        marginTop:90,
        fontFamily:'Poppins-SemiBold'
    },
    img: {
        height: 120,
        width: 350,
        borderRadius: 15,
        marginLeft: 5,
        marginTop: 60,
        position:'relative'

    },
    img1: {
        width: 350,
        borderRadius: 15,
        marginLeft: 5,
        marginTop: 20,
    },
    img4: {
        width: 350,
        borderRadius: 15,
        marginLeft: 5,
        marginTop: 20,
    },
    gambar:{
        width:60,
        height:60,
        position:'absolute',
        marginLeft:280,
        marginTop:60,
            
    },

});
