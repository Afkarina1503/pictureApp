import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'

export default function home({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Text style={styles.text1}>Choose According to</Text>
                <Text style={styles.text2}>your wishes!!!!</Text>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Ootd')}>
                        <Image
                            style={styles.img}
                            source={require('../src/album/1.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('food')}>
                    <Text>Food</Text>
                    <Image
                        style={styles.img1}
                        source={require('../src/album/2.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('panorama')}>
                    <Image
                        style={styles.img4}
                        source={require('../src/album/3.png')} />
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
    img: {
        height: 120,
        width: 350,
        borderRadius: 15,
        marginLeft: 5,
        marginTop: 60,
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

});
