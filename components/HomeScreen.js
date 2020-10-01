import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function Home(props) {
return (
   
    <ImageBackground source={require('../bg.png')} style={styles.HomeStyle}>
      <View >
        <Text style = {styles.fontTop} >
            Covid-19 Infected Situation Reports (Thailand)
        </Text>    
    </View>

    <View>
        <Text style = {styles.fontBottom} >
            Stay home and stay informed with Keena App
        </Text>
    </View>
    </ImageBackground>
)
}

const styles = StyleSheet.create({
    HomeStyle :{
        alignItems : 'center',
        height : '100%',
        width : '100%',
        //opacity : 0.5,
        backgroundColor : '#00ccff',
        justifyContent : 'space-between',

    },
    fontTop :{
        fontSize : 30,
        flexDirection :'column',
       marginTop : 50,
       marginBottom:30,
       color : 'red',
       padding : 10,
       backgroundColor : 'black',

    },
    fontBottom :{
        color : 'white',
        fontSize : 20,
        backgroundColor : 'orange',
        marginBottom : 50,
        marginLeft : 10,
        marginRight : 10,
        borderColor : 'orange',
        borderWidth: 6,
        borderRadius:10,    }
})