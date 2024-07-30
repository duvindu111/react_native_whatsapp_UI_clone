import {View, Text, StyleSheet, Image, TextInput, ScrollView, Pressable, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {signIn, signUp} from "@/firebase";
import {isDisabled} from "@expo/metro-runtime/build/error-overlay/Data/LogBoxData";

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState("signUp");
    const isDisabled = !email || !password;

    async function handlePress() {
        try {
            if (mode === "signUp") {
                const userCredential = await signUp(email, password);
                /*debug*/ alert(userCredential.user?.email);
            }
            if (mode === "signIn") {
                const userCredential = await signIn(email, password);
                /*debug*/ alert(userCredential.user?.email);
            }
        }catch (error) {
            console.error("Authentication Error:", error);
        }
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewCont}>
                    <Text style={styles.welcomeText}>Welcome to Whatsapp</Text>
                    <Image style={styles.welcomeImg} source={require('@/assets/images/icons/welcome-img.png')} />
                    <View style={styles.textInputContainer}>
                        <TextInput
                            placeholder={'Email'}
                            value={email}
                            onChangeText={setEmail}
                            style={styles.textInput}></TextInput>
                        <TextInput
                            placeholder={'Password'}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            style={[styles.textInput, styles.bottomTextInput]}></TextInput>
                    </View>
                    <Pressable style={({ pressed }) => [
                            { backgroundColor: isDisabled ? '#ddd' : pressed ? '#075e54' : '#25d366',},
                            styles.button, ]}
                            onPress={handlePress}
                            disabled={isDisabled}>
                        <Text style={[styles.buttonText, {color: isDisabled ? 'gray' : 'white'}]}>{
                            mode === "signUp" ? "SIGN UP" : "SIGN IN"
                        }</Text>
                    </Pressable>
                    <TouchableOpacity style={{marginTop: 15}}
                        onPress={()=>
                        setMode(mode === "signUp" ? "signIn" : "signUp")
                    }>
                        <Text style={{color: '#25d366'}}>{
                            mode === "signUp" ? "Already have an account? Sign In"
                                : "Don't have an account? Sign Up"
                        }</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 8,
        paddingHorizontal: 30,
        marginTop: 20,
        width: '60%'
    },
    buttonText: {
        textAlign: 'center',
    },
    scrollViewCont: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    scrollView: {
        flex: 1,
        width: '100%',
    },
    bottomTextInput: {
        marginTop: 20
    },
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: '#128c7e',
        width: '100%',
    },
    textInputContainer: {
        width: '60%',
        marginTop: 30
    },
    welcomeText: {
        fontSize: 24,
        color: '#075e54',
        fontWeight: '400',
        marginBottom: 10
    },
    welcomeImg: {
        width: 180,
        height: 180,
        marginTop: 20
    }
})