import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Pressable} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function ProfileSetup() {
    const [displayName, setDisplayName] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    async function handlePress() {

    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewCont}>
                    <Text style={styles.title}>Profile Info</Text>
                    <Text style={styles.subtitle}>Please provide your name and an optional profile photo</Text>
                    <TouchableOpacity style={styles.selectImageCont}>
                        {
                            !selectedImage ?
                                <MaterialCommunityIcons name="camera-plus" size={45} color="#717171" />:
                                <Image source={{uri: selectedImage}} style={{width: '100%', height: '100%'}} />
                        }
                    </TouchableOpacity>
                    <TextInput placeholder={'Type your name'}
                    value={displayName}
                    onChangeText={setDisplayName}
                    style={styles.textInput}></TextInput>
                    <Pressable style={({ pressed }) => [
                        { backgroundColor: !displayName ? '#ddd' : pressed ? '#075e54' : '#25d366',},
                        styles.button, ]}
                    onPress={handlePress}
                    disabled={!displayName}>
                        <Text style={[styles.buttonText, {color: !displayName ? 'gray' : 'white'}]}>NEXT</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 8,
        paddingHorizontal: 30,
        marginTop: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    },
    textInput: {
        borderBottomColor: '#128c7e',
        borderBottomWidth: 2,
        marginTop: 40,
        width: '100%'
    },
    selectImageCont: {
        marginTop: 30,
        borderRadius: 120,
        width: 120,
        height: 120,
        backgroundColor: '#ece5dd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#075e54',
        fontSize: 16,
    },
    subtitle: {
        marginTop: 20,
    },
    scrollViewCont: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    scrollView: {
        width: '100%',
        paddingBottom: 25,
        paddingTop: 25,
    },
})
