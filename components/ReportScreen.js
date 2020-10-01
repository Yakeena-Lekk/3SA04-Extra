import React from 'react';
import { View } from 'react-native';
import Report from './Report';
import { StatusBar } from 'expo-status-bar';

export default function ReportScreen({route}) {    
    return (
        <View>
            <Report check={route.params.check} />
            <StatusBar style="auto" />
        </View>
    );
}