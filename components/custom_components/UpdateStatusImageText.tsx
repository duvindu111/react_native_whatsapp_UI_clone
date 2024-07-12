import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import images from '@/constants/ImagesMapping'

export default function UpdateStatusImageText({
    Name,
    ImageName
}:{
    ImageName: string
    Name: string
}) {
  return (
    <View id='my-status'>
    <View style={styles.myStatusImageContainer}>
    <Image
        style={styles.status}
        source={images[ImageName as keyof typeof images]}
    />
    </View>
    <Text style={styles.statusText} numberOfLines={1}>{Name}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    statusText: {
      textAlign: 'center',
      fontSize: 13,
      maxWidth: 60
    },
    stBottomRow: {
      paddingHorizontal: 15,
      flexDirection: 'row',
    },
    myStatusImageContainer: {
      width: 60,
      height: 60,
      marginBottom: 8
    },
    myStatusDot: {
      height: 22,
      width: 22,
      backgroundColor: 'green',
      borderRadius: 10,
      position: 'absolute',
      right: 0,
      bottom: 0,
      borderTopColor: 'white',
      borderLeftColor: 'white',
      borderRightColor: 'white',
      borderBottomColor: 'white',
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    status: {
      height: 60,
      width: 60,
      borderRadius: 30,
    }
})