import React from 'react';
import { View, Text,  StyleSheet} from 'react-native';

export default function Forecast(props) {
    return (
    
        <View >
            <Text  >{props.Confirmed}</Text>
            <Text >{props.Recovered}</Text>
            <Text >{props.Hospitalized}</Text>
            <Text >{props.Deaths}</Text>
            <Text >{props.UpdateDate}</Text>

            </View>
    );
    }