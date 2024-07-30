import { AntDesign, Entypo, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                {/* header */}
                <View id='header' style={styles.header}>
                    <View id='headerLeftSection' style={styles.headerLeftSection}>
                        <AntDesign name="arrowleft" size={24} color="black" style={{ marginRight: 15 }} 
                        onPress={() => {
                            router.back();
                        }}/>
                        <Text style={styles.headerLeftTextNoLogo}>Settings</Text>
                    </View>
                    <View style={styles.headerRightText}>
                        <Fontisto name="search" size={24} color="black" />
                    </View>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.topRow}>
                        <Image
                            style={styles.profilePic}
                            source={require('@/assets/images/profile-pic/wade.jpg')}
                        />
                        <View style={styles.topRowMidCont}>
                            <Text style={styles.name} numberOfLines={1}>Duvindu Thathsara</Text>
                            <Text style={styles.about}>{`</>`}</Text>
                        </View>
                        <View style={styles.topRowLastCont}>
                            <MaterialIcons name="qr-code" size={24} color="#0CC143" />
                            <AntDesign name="downcircleo" size={22} color="#0CC143" />
                        </View>
                    </View>
                    <View style={styles.midRowsContainer}>
                        <View style={styles.midRows}>
                            <View style={styles.iconCont}>
                                <MaterialIcons name="key" size={24} color="#595959" />
                            </View>
                            <View style={styles.topRowMidCont}>
                                <Text style={styles.settingName}>Account</Text>
                                <Text style={styles.settingDesc}>Security notification, change number</Text>
                            </View>
                        </View>
                        <View style={styles.midRows}>
                            <View style={styles.iconCont}>
                                <MaterialIcons name="lock-outline" size={24} color="#595959" />
                            </View>
                            <View style={styles.topRowMidCont}>
                                <Text style={styles.settingName}>Privacy</Text>
                                <Text style={styles.settingDesc}>Block contacts, disappearing messages</Text>
                            </View>
                        </View>
                        <View style={styles.midRows}>
                            <View style={styles.iconCont}>
                                <MaterialIcons name="face-5" size={24} color="#595959" />
                            </View>
                            <View style={styles.topRowMidCont}>
                                <Text style={styles.settingName}>Avatar</Text>
                                <Text style={styles.settingDesc}>Create, edit, profile photo</Text>
                            </View>
                        </View>
                        <View style={styles.midRows}>
                            <View style={styles.iconCont}>
                                <AntDesign name="hearto" size={24} color="#595959" />
                            </View>
                            <View style={styles.topRowMidCont}>
                                <Text style={styles.settingName}>Favourites</Text>
                                <Text style={styles.settingDesc}>Add, reorder, remove</Text>
                            </View>
                        </View>
                        <View style={styles.midRows}>
                            <View style={styles.iconCont}>
                                <MaterialCommunityIcons name="message-reply-text-outline" size={24} color="#595959" />
                            </View>
                            <View style={styles.topRowMidCont}>
                                <Text style={styles.settingName}>Chats</Text>
                                <Text style={styles.settingDesc}>Theme, wallpapers, chat history</Text>
                            </View>
                        </View>
                        <View style={styles.midRows}>
                            <View style={styles.iconCont}>
                                <MaterialCommunityIcons name="bell-outline" size={24} color="#595959" />
                            </View>
                            <View style={styles.topRowMidCont}>
                                <Text style={styles.settingName}>Notifications</Text>
                                <Text style={styles.settingDesc}>Message, group & call tones</Text>
                            </View>
                        </View>
                        <View style={styles.midRows}>
                            <View style={styles.iconCont}>
                                <MaterialIcons name="data-saver-off" size={24} color="#595959" />
                            </View>
                            <View style={styles.topRowMidCont}>
                                <Text style={styles.settingName}>Storage and data</Text>
                                <Text style={styles.settingDesc}>Network usage, auto-download</Text>
                            </View>
                        </View>
                        <View style={styles.midRows}>
                            <View style={styles.iconCont}>
                                <MaterialCommunityIcons name="web" size={24} color="#595959" />
                            </View>
                            <View style={styles.topRowMidCont}>
                                <Text style={styles.settingName}>App language</Text>
                                <Text style={styles.settingDesc}>English (device's language)</Text>
                            </View>
                        </View>
                        <View style={styles.midRows}>
                            <View style={styles.iconCont}>
                                <Ionicons name="help-circle-outline" size={24} color="#595959" />
                            </View>
                            <View style={styles.topRowMidCont}>
                                <Text style={styles.settingName}>Help</Text>
                                <Text style={styles.settingDesc}>Help center, contact us, privacy policy</Text>
                            </View>
                        </View>
                        <View style={styles.midRows}>
                            <View style={styles.iconCont}>
                            <MaterialIcons name="people-outline" size={24} color="#595959" />
                            </View>
                            <View style={styles.topRowMidCont}>
                                <Text style={styles.settingName}>Invite a friend</Text>
                                {/* <Text style={styles.settingDesc}>Block contacts, disappearing messages</Text> */}
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.bottomTitleText}>Also from Meta</Text>
                        <View style={styles.lastRows}>
                            <View style={styles.iconCont}>
                            <Ionicons name="logo-instagram" size={24} color="#595959" />
                            </View>
                            <View style={styles.lastRowMidCont}>
                                <Text style={styles.settingName}>Open Instagram</Text>
                            </View>
                        </View>
                        <View style={styles.lastRows}>
                            <View style={styles.iconCont}>
                            <Entypo name="facebook-with-circle" size={24} color="#595959" />
                            </View>
                            <View style={styles.lastRowMidCont}>
                                <Text style={styles.settingName}>Open Facebook</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const fullWidthofScreen = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    lastRows: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 0,
        backgroundColor: 'white'
    },
    lastRowMidCont: {
        justifyContent: 'center',
        flex: 1
    },
    bottomTitleText: {
        paddingHorizontal: 20,
        backgroundColor: 'white',
        paddingBottom: 10,
    },
    bottomContainer: {

    },
    midRowsContainer: {
        paddingBottom: 10,
        backgroundColor: 'white'
    },
    settingDesc: {
        color: '#737373'
    },
    settingName: {
        fontSize: 17,
        marginBottom: 5
    },
    iconCont: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topRowMidCont: {
        justifyContent: 'center',
        flex: 1
    },
    topRowLastCont: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    about: {
        fontSize: 16
    },
    name: {
        fontSize: 22,
        marginBottom: 3
    },
    profilePic: {
        width: 65,
        height: 65,
        borderRadius: 50
    },
    topRow: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        backgroundColor: 'white'
    },
    midRows: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 15,
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: 'white',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'auto',
        paddingHorizontal: 15,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1
    },
    headerLeftSection: {
        flexDirection: 'row',
        alignItems: 'center'
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
        gap: 30,
    }
});
