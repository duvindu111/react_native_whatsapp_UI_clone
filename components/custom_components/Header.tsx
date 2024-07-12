import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header({
    NoSearchIcon,
    Logo,
    LeftText
}:{
    NoSearchIcon?: boolean,
    Logo?: boolean,
    LeftText: String
}) {
    return (
        <View id='header' style={styles.header}>
            <View id='headerLeftSection'>
                <Text style={Logo ? styles.headerLeftTextLogo : styles.headerLeftTextNoLogo}>{LeftText}</Text>
            </View>
            <View style={styles.headerRightText}>
                <Feather name="camera" size={24} color="black" />
                {
                    NoSearchIcon ? null : <Fontisto name="search" size={24} color="black" />
                }
                <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
            </View>
        </View>
    )
}

const fullWidthofScreen = Dimensions.get('screen').width

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: fullWidthofScreen,
        paddingHorizontal: 15,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1
    },
    headerLeftTextLogo: {
        fontSize: 25, 
        color: '#25D366',
        fontWeight: '600'
    },
    headerLeftTextNoLogo: {
        fontSize: 25, 
        color: 'black',
        letterSpacing: 0.3,
    },
    headerRightText: {
        flexDirection: 'row',
        gap: 30
    }
})