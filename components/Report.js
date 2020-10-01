import React, { useState ,useEffect} from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Stat from './Stat';

export default function Report(props) {
    const [statInfo, setstatInfo] = useState({
        Confirmed:'Confirmed',
        Recovered:'Recovered',
        Hospitalized:'Hospitalized',
        Deaths:'Deaths',
        UpdateDate:'UpdateDate',

    })
    useEffect(() => {
        console.log(`fetching data with check = ${props.check}`)
        if (props.check) {              

        fetch(`https://covid19.th-stat.com/api/open/today`)
                   .then((response) => response.json())
                   .then((json) => {
                       setForecastInfo({
                        Confirmed: json.report[0].Confirmed,
                        Recovered: json.report[0].Recovered,
                        Hospitalized: json.report[0].Hospitalized,
                        Deaths: json.report[0].Deaths,
                        UpdateDate: json.report[0].UpdateDate,
                       });
                   })
                   .catch((error) => {
                       console.warn(error);
                   });
           }
       }, [props.check]) 

       return (
        <View>
            <View style={styles.cover}>
                    <Text style= {styles.small}> zipCode is {props.check}</Text>
                <Stat {...statInfo} />
            </View>
        </View>
    );
}