import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function FloatingGreenButton() {
  return (
    <View style={styles.btnContainer}>
        <MaterialIcons name="chat" size={24} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
    btnContainer: {
        position: 'absolute',
        bottom: 95,
        right: 15,
        width: 60,
        height: 60,
        borderRadius: 18,
        backgroundColor: '#0CC143',
        justifyContent: 'center',
        alignItems: 'center'
    }
})