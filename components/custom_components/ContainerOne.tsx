import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import images from '@/constants/ImagesMapping'

export default function ProfileViewOutside({
  Name,
  Message,
  ImageName,
  DateTime,
  Muted,
  Pinned,
  Notification,
  NtfCount
}:{
  Name: String
  Message: String
  ImageName: string
  DateTime: String
  Muted?: boolean
  Pinned?: boolean
  Notification?: boolean
  NtfCount?: number
}) {
  return (
    <View style={styles.mainContainer}>
      {/* imageView */}
      <View>
      <Image
        style={styles.profilePic}
        source={images[ImageName as keyof typeof images]}
      />
      </View>

      {/* contentView */}
      <View style={styles.contentView}>
        {/* topView */}
        <View style={styles.spaceBetween}>
            <View>
                <Text style={styles.name}>{Name}</Text>
            </View>
            <View>
                <Text style={Notification ? styles.dateTimeNtf : styles.dateTimeNoNtf}>
                  {DateTime}
                </Text>
            </View>
        </View>

        {/* bottomView */}
        <View style={[styles.spaceBetween, styles.bottomView]}>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description} numberOfLines={1}>{Message}</Text>
            </View>
            <View style={styles.iconContainer}>
                {Muted ?                
                <MaterialCommunityIcons name="bell-off" size={20} color="rgba(113, 113, 113, 1)" />
                : null }
                {Pinned ? 
                <MaterialCommunityIcons name="pin" size={20} color="rgba(113, 113, 113, 1)" />
                : null}
                {Notification ?
                <View style={styles.ntfCountCircle}>
                    <Text style={styles.ntfCountNumber}>{NtfCount}</Text>
                </View> 
                : null}
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    descriptionContainer: {
      flex: 1,
      paddingRight: 20
    },
    ntfCountNumber: {
      color: 'white',
      fontSize: 12,
      fontWeight: '500'
    },
    ntfCountCircle: {
      backgroundColor: '#0CC143',
      width: 20,
      height: 20,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer: {
      flexDirection: 'row',
      gap: 3,
      // width: 'max-content',
      justifyContent: 'flex-end',
    },
    bottomView: {
      marginTop: 3,
      alignItems: 'center'
    },
    description: {
      color: 'rgba(113, 113, 113, 1)',
      fontSize: 16,
    },
    dateTimeNoNtf: {
      color: 'rgba(113, 113, 113, 1)'
    },
    dateTimeNtf: {
      color: '#0CC143'
    },
    name: {
      fontSize: 20,
    },
    contentView: {
        flex: 1
    },
    spaceBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    mainContainer: {
      flexDirection: 'row',
      gap: 15,
      paddingVertical: 10,
      marginBottom: 6
    },
    profilePic: {
      width: 55,
      height: 55,
      borderRadius: 50
    }
  });