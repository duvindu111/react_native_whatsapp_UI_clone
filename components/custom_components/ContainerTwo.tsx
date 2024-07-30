import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import images from '@/constants/ImagesMapping';
import CallStatus from '@/constants/CallStatus';

export default function ProfileViewOutside({
  Name,
  Message,
  ImageName,
  Audio,
  Video,
  Call,
  Icon,
  CallStatus
}:{
  Name: String
  Message: String
  ImageName: string
  Audio?: boolean
  Video?: boolean
  Call?: boolean
  Icon?: React.ReactNode
  CallStatus: CallStatus
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
                <Text style={[styles.name, CallStatus === "Missed" && styles.redText]}>{Name}</Text>
            </View>
        </View>

        {/* bottomView */}
        <View style={[styles.spaceBetween, styles.bottomView]}>
            <View style={styles.descriptionContainer}>
              <View style={styles.callStatContainer}>
                {
                  CallStatus === "Incoming" && <MaterialIcons name="call-received" size={18} color="#0CC143" />
                }
                {
                  CallStatus === "Outgoing" && <MaterialIcons name="call-made" size={18} color="#0CC143" />
                }
                {
                  CallStatus === "Missed" && <MaterialIcons name="call-received" size={18} color="red" />
                }  
              </View>
              <Text style={styles.description} numberOfLines={1}>{Message}</Text>
            </View>
        </View>
      </View>

      {/* singleIconView */}
      <View style={styles.iconContainer}>
        {
          Call ?
          <> 
            {Audio && <MaterialCommunityIcons name="phone-outline" size={26} color="#0CC143" />}
            {Video && <AntDesign name="videocamera" size={26} color="#0CC143" />}
          </>
          : Icon ? Icon : null
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  redText: {
    color: 'red'
  },
  callStatContainer: {
    marginRight: 5
  },
  iconContainer: {
    justifyContent: 'center',
  },
    descriptionContainer: {
      flex: 1,
      paddingRight: 20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    bottomView: {
      marginTop: 3,
      alignItems: 'center'
    },
    description: {
      color: 'rgba(113, 113, 113, 1)',
      fontSize: 16,
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