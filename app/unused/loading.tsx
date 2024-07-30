import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('@/assets/images/icons/whatsapp_logo.png')}
        />
        <View style={styles.metaContainer}> 
          <Text style={styles.metaText}>from</Text>
          <Image
          style={styles.metalogo}
          source={require('@/assets/images/icons/meta_logo.png')}
          />
        </View>
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  metaText: {
    fontSize: 16,
    marginBottom: 6,
    color: 'black'
  },
  metaContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 40
  },
  metalogo: {
    width: 100
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  logo: {
    width: 70,
    height: 70
  }
})