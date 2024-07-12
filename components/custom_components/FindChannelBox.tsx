import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '@/constants/ImagesMapping'

export default function FindChannelBox({
    ImageName,
    Name
}:{
    ImageName: React.ReactNode
    Name: string
}) {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
            style={styles.newChannelLogo}
            source={images[ImageName as keyof typeof images]}
            />
            <Image
            style={styles.whiteCircle}
            source={require('@/assets/images/icons/whitecirclegreencorrectmark.png')}
            />
        </View>
        <Text>{Name}</Text>
        <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    whiteCircle: {
        width: 28,
        height: 28,
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    imageContainer: {
        width: 60,
        height: 60,
        marginBottom: 10
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 35,
        borderRadius: 18,
        alignItems: 'center',
        backgroundColor: '#bdffc6',
        marginTop: 10
    },
    buttonText: {
    color: 'rgba(0, 128, 105, 1)',
    fontSize: 16,
    },
    newChannelLogo: {
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    container: {
        borderColor: '#dedede',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 15,
        alignItems: 'center',
    }
})