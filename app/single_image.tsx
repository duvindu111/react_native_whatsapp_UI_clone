import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams, router } from 'expo-router'

export default function singleImage() {

    const { image } = useLocalSearchParams();
    const imageUri = typeof image === 'string' ? image : '';

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                    {imageUri ? (
                        <Image
                            source={{ uri: imageUri }}
                            style={{
                                width: '70%', height: 'auto', aspectRatio: 9/16,
                                borderRadius: 8, borderColor: 'rgba(0, 0, 0, 0.7)', borderWidth: 1
                            }}
                        />
                    ) : (
                        <Text>No image available</Text>
                    )}
                </View>
                <View style={styles.buttonCont}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.buttonStyle}>
                        <Text style={{ color: 'white' }}>Go back</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({
    buttonCont: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    safeArea: {
        flex: 1,
    },
    buttonStyle: {
        padding: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        width: 'max-content',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 30,
    },
})