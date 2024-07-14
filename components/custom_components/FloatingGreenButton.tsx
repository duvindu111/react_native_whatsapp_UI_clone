import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FloatingGreenButton({
  Icon
}:{
  Icon: React.ReactNode
}) {
  return (
    <View style={styles.btnContainer}>
        {Icon}
    </View>
  )
}

const styles = StyleSheet.create({
    btnContainer: {
        position: 'absolute',
        bottom: 25,
        right: 15,
        width: 60,
        height: 60,
        borderRadius: 18,
        backgroundColor: '#0CC143',
        justifyContent: 'center',
        alignItems: 'center'
    }
})