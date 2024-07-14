import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/custom_components/Header'
import FloatingGreenButton from '@/components/custom_components/FloatingGreenButton'
import { MaterialIcons } from '@expo/vector-icons';

export default function calls() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Header LeftText={"Calls"} />
        </View>
        <ScrollView style={styles.bodyContainer}>
          <View id='createCallLinkSec'>
    
          </View>
        </ScrollView>
         <View> 
           {/* footer  */}
           {/* <Footer Chats ChatCountNotification ChatNotificationCount={5} 
          UpdatesNotification
          CallCountNotification CallNotificationCount={7}/> */}
        </View>
        <FloatingGreenButton Icon={<MaterialIcons name="chat" size={24} color="white" />}/> 
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    chatSection: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingBottom: 90
    },
    bodyContainer: {
      backgroundColor: 'white',
    },
    categorySection: {
      paddingHorizontal: 15,
      paddingVertical: 16,
      flexDirection: 'row',
      gap: 8
    }
})