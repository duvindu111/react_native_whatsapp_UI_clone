import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

interface NotificationIconProps {
    icon: JSX.Element;
    count: number;
    focused?: boolean;
    newItemsAvailable?: boolean;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({ icon, count, focused, newItemsAvailable }) => (
    <View style={focused ? styles.focusedIconContainer : undefined}>
        <View>
            {icon}
            {count > 0 ? 
            <View style={[styles.notificationDot, styles.dot]}>
                <Text style={styles.notificationCount}>{count}</Text>
            </View> 
            :   
            newItemsAvailable ?
            <View style={[styles.newItemsAviailableDot, styles.dot]}>
            </View> 
            :
            null}
        </View>
    </View>
);

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: { ...styles.tabContainer },
            tabBarItemStyle: { ...styles.tabItem },
            tabBarLabelStyle: { fontSize: 14 },
            tabBarActiveTintColor: 'black',
        
        }}>
              <Tabs.Screen name="calls"
                options={{
                    title: 'Calls',
                    tabBarIcon: ({ focused }) => (
                        <NotificationIcon 
                            icon={<Ionicons name="call-outline" size={24} color="black" />} 
                            count={0} 
                            focused={focused} 
                        />
                    )
                }} />
            <Tabs.Screen name="chat"
                options={{
                    title: 'Chats',
                    tabBarIcon: ({ focused }) => (
                        <NotificationIcon 
                            icon={<MaterialCommunityIcons name="android-messages" size={26} color="black" />} 
                            count={7} 
                            focused={focused} 
                        />
                    )
                }} />
            <Tabs.Screen name="updates"
                options={{
                    title: 'Updates',
                    tabBarIcon: ({ focused }) => (
                        <NotificationIcon 
                            icon={<Image
                                style={[styles.icon, styles.statusIcon]}
                                source={require('@/assets/images/icons/whatsapp-status.png')} />} 
                            count={0} 
                            focused={focused} 
                            newItemsAvailable
                        />
                    )
                }} />
            <Tabs.Screen name="communities"
                options={{
                    title: 'Communities',
                    tabBarIcon: ({ focused }) => (
                        <NotificationIcon 
                            icon={<Ionicons name="people-outline" size={24} color="black" />} 
                            count={0} 
                            focused={focused} 
                        />
                    )
                }} />
          
        </Tabs>
    );
}

const styles = StyleSheet.create({
    focusedIconContainer: {
        backgroundColor: '#D3FFE2',
        borderRadius: 18,
        paddingHorizontal: 20,
        paddingVertical: 3,
    },
    icon: {
        width: 24,
        height: 24,
    },
    statusIcon: {
        marginTop: 3
    },
    tabContainer: {
        height: 78,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: '#f2f2f2',
        borderTopWidth: 1,
    },
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    notificationDot: {
        width: 16,
        height: 16,
    },
    notificationCount: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    newItemsAviailableDot: {
        width: 12,
        height: 12,
    },
    dot: {
        position: 'absolute',
        right: -6,
        top: -0,
        backgroundColor: '#0CC143',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
