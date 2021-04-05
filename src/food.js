import React from 'react'
import { View, Text,StyleSheet,Image,ScrollView} from 'react-native'

export default function home() {
    return (
        <ScrollView>
        <View>
            <Text style={styles.text1}>Aestetic food in the world</Text> 
            <Text style={styles.text2}>Our favorite PictureApp</Text>  
            <Image 
            style={styles.img}
            source={require('../src/food/imageku.png')} />  
              <Image 
            style={styles.img1}
            source={require('../src/food/image38.png')} />  
              <Image 
            style={styles.img}
            source={require('../src/food/image35.png')} />  
              <Image 
            style={styles.img1}
            source={require('../src/food/image31.png')} />  
              <Image 
            style={styles.img}
            source={require('../src/food/image25.png')} />  
              <Image 
            style={styles.img1}
            source={require('../src/food/image24.png')} />  
              <Image 
            style={styles.img}
            source={require('../src/food/image22.png')} />  
              <Image 
            style={styles.img1}
            source={require('../src/food/image19.png')} />  
              <Image 
            style={styles.img}
            source={require('../src/food/image16.png')} />  
            <Image 
            style={styles.img1}
            source={require('../src/food/image13.png')} />  
            <Image 
            style={styles.img}
            source={require('../src/food/image1.png')} />  
            <Image 
            style={styles.img1}
            source={require('../src/food/image10.png')} />  
            <Image 
            style={styles.img}
            source={require('../src/food/image7.png')} />  
            <Image 
            style={styles.img1}
            source={require('../src/food/image4.png')} />  
            </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
  
    text1:{
        fontSize:30,
        padding:25,
        fontFamily: 'Poppins-SemiBold'
    },
    text2:{
        fontSize:18,
        marginTop:-25,
        paddingLeft:25,
        fontFamily: 'Poppins-ThinItalic',
    },
    img:{
        width:160,
        height:100,
        marginLeft:6,
        borderRadius:10,
        marginTop:10,
    },
    img1:{
      width:160,
      height:100,
      marginLeft:190,
      borderRadius:10,
      marginTop:-100,
  },
});