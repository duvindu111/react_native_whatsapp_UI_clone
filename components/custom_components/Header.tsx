import {Fontisto, MaterialCommunityIcons} from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import {Link} from 'expo-router';
import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import HeaderPage from '@/constants/HeaderPage';

export default function Header({
    NoSearchIcon,
    Logo,
    LeftText,
    HeaderPage,
                               }: {
    NoSearchIcon?: boolean,
    Logo?: boolean,
    LeftText: String,
    HeaderPage: HeaderPage,
}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <View id='header' style={styles.header}>
                <View id='headerLeftSection'>
                    <Text style={Logo ? styles.headerLeftTextLogo : styles.headerLeftTextNoLogo}>{LeftText}</Text>
                </View>
                <View style={styles.headerRightText}>
                    <Link href={'/camera'}>
                        <Feather name="camera" size={24} color="black"/>
                    </Link>
                    {
                        NoSearchIcon ? null : <Fontisto name="search" size={24} color="black"/>
                    }
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="black"
                                            onPress={() => setModalVisible(true)}/>
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPressOut={() => setModalVisible(false)}
                >
                    <View style={styles.menuModalView}>
                        {
                            HeaderPage === "Chat" ?
                            <>
                                <Text style={styles.menuModalText}>New group</Text>
                                <Text style={styles.menuModalText}>New broadcast</Text>
                                <Text style={styles.menuModalText}>Linked devices</Text>
                                <Text style={styles.menuModalText}>Starred messages</Text>
                                <Text style={styles.menuModalText}>Settings</Text>
                            </> : null
                        }
                        {
                            HeaderPage === "Update" ?
                                <>
                                    <Text style={styles.menuModalText}>Status privacy</Text>
                                    <Text style={styles.menuModalText}>Create Channel</Text>
                                    <Text style={styles.menuModalText}>Settings</Text>
                                </> : null
                        }
                        {
                            HeaderPage === "Community" ?
                                <>
                                    <Text style={styles.menuModalText}>Settings</Text>
                                </> : null
                        }
                        {
                            HeaderPage === "Calls" ?
                                <>
                                    <Text style={styles.menuModalText}>Clear call log</Text>
                                    <Text style={styles.menuModalText}>Settings</Text>
                                </> : null
                        }
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
    },
    menuModalText: {
        marginBottom: 15,
    },
    menuModalView: {
        paddingLeft: 20,
        paddingTop: 25,
        minWidth: '50%',
        position: 'absolute',
        top: 60,
        right: 0,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 5,
        borderRadius: 10
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
        borderBottomWidth: 1,
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
        overflow: 'visible',
    }
})