import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function ProfileViewOutside() {
  return (
    <View style={styles.mainContainer}>
      {/* imageView */}
      <View>
      <Image
        style={styles.profilePic}
        source={require('@/assets/images/profile-pic/aliena smith.jpg')}
      />
      </View>

      {/* contentView */}
      <View style={styles.contentView}>
        {/* topView */}
        <View style={styles.spaceBetween}>
            <View>
                <Text style={styles.name}>Aliena Smith</Text>
            </View>
            <View>
                <Text style={styles.dateTime}>2.01 am</Text>
            </View>
        </View>

        {/* bottomView */}
        <View style={[styles.spaceBetween, styles.bottomView]}>
            <View>
                <Text style={styles.description}>I sent you the documents.</Text>
            </View>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="bell-off" size={20} color="rgba(113, 113, 113, 1)" />
                <MaterialCommunityIcons name="pin" size={20} color="rgba(113, 113, 113, 1)" />
                <View style={styles.ntfCountCircle}>
                    <Text style={styles.ntfCountNumber}>5</Text>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
      gap: 3
    },
    bottomView: {
      marginTop: 3,
      alignItems: 'center'
    },
    description: {
      color: 'rgba(113, 113, 113, 1)',
      fontSize: 16
    },
    dateTime: {
      color: 'rgba(113, 113, 113, 1)'
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
      marginBottom: 15
    },
    profilePic: {
      width: 55,
      height: 55,
      borderRadius: 50
    }
  });