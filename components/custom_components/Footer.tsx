import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router'

export default function Footer({
    Chats,
    Updates,
    Communities,
    Calls,
    ChatCountNotification,
    ChatNotificationCount,
    ChatNotification,
    UpdatesCountNotification,
    UpdatesNotificationCount,
    UpdatesNotification,
    CommunityCountNotification,
    CommunityNotificationCount,
    CommunityNotification,
    CallCountNotification,
    CallNotificationCount,
    CallNotification
}:{
    Chats?: boolean
    Updates?: boolean
    Communities?: boolean
    Calls?: boolean
    ChatCountNotification?: boolean
    ChatNotificationCount?: number
    ChatNotification?: boolean
    UpdatesCountNotification?: boolean
    UpdatesNotificationCount?: number
    UpdatesNotification?: boolean
    CommunityCountNotification?: boolean
    CommunityNotificationCount?: number
    CommunityNotification?: boolean
    CallCountNotification?: boolean
    CallNotificationCount?: number
    CallNotification?: boolean
}) {
  return (
    <View style={styles.footer}>
        <Link href={'/chat'} >
        <View style={styles.horizontalCenter} >
        <View style={[styles.iconContainer, Chats ? styles.greenBackground : null]}>
            <MaterialCommunityIcons name="android-messages" size={26} color="black" />
            {
                ChatCountNotification ?
                <View style={[styles.ntfGreenDot, styles.greenDot]}>
                    <Text style={styles.footerNtfCount}>{ChatNotificationCount}</Text>
                </View> : null
            }
            {
                ChatNotification ? 
                <View style={[styles.smallGreenDot, styles.greenDot]}></View> : null
            }
        </View>
        <Text>Chats</Text>
      </View>
        </Link>

        <Link href='updates'>
        <View style={styles.horizontalCenter}>
        <View style={[styles.iconContainer, Updates ? styles.greenBackground : null]}>
            <Image
                style={[styles.icon, styles.statusIcon]}
                source={require('@/assets/images/icons/whatsapp-status.png')}
            />
            {
                UpdatesCountNotification ?
                <View style={[styles.ntfGreenDot, styles.greenDot]}>
                    <Text style={styles.footerNtfCount}>{UpdatesNotificationCount}</Text>
                </View> : null
            }
            {
                UpdatesNotification ? 
                <View style={[styles.smallGreenDot, styles.greenDot]}></View> : null
            }
        </View>
        <Text>Updates</Text>
      </View>
        </Link>
     
      <View style={styles.horizontalCenter}>
        <View style={[styles.iconContainer, Communities ? styles.greenBackground : null]}>
            <Ionicons name="people-outline" size={24} color="black" />
            {
                CommunityCountNotification ?
                <View style={[styles.ntfGreenDot, styles.greenDot]}>
                    <Text style={styles.footerNtfCount}>{CommunityNotificationCount}</Text>
                </View> : null
            }
            {
                CommunityNotification ? 
                <View style={[styles.smallGreenDot, styles.greenDot]}></View> : null
            }
        </View>
        <Text>Communities</Text>
      </View>
      <View style={styles.horizontalCenter}>
        <View style={[styles.iconContainer, Calls ? styles.greenBackground : null]}>
            <Ionicons name="call-outline" size={24} color="black" />
            {
                CallCountNotification ?
                <View style={[styles.ntfGreenDot, styles.greenDot]}>
                    <Text style={styles.footerNtfCount}>{CallNotificationCount}</Text>
                </View> : null
            }
            {
                CallNotification ? 
                <View style={[styles.smallGreenDot, styles.greenDot]}></View> : null
            }
        </View>
        <Text>Calls</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    footerNtfCount: {
        color: 'white',
        fontSize: 11,
    },
    greenDot: {
        backgroundColor: '#0CC143',
        borderRadius: 12,
        position: 'absolute',
        top: 4,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ntfGreenDot: {
        width: 16,
        height: 16,
    },
    smallGreenDot: {
        width: 12,
        height: 12,
    },
    greenBackground: {
        backgroundColor: '#D3FFE2',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,  
        borderTopColor: '#f2f2f2',
        backgroundColor: 'white',
    },
    horizontalCenter: {
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24,
    },
    statusIcon: {
        marginTop: 3
    },
    iconContainer:{
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        paddingHorizontal: 18,
        paddingVertical: 6,
        borderRadius: 15
    }
})