import { View, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Header from '@/components/custom_components/Header'
import CategoryBadge from '@/components/custom_components/CategoryBadge'
import ProfileViewOutside from '@/components/custom_components/ProfileViewOutside'

export default function index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Header LeftText={"WhatsApp"} Logo/>
        </View>
        <ScrollView style={styles.bodyContainer}>
          {/* category section */}
          <View id='category-section' style={styles.categorySection}>
            <CategoryBadge Word={"All"} IsActive/>
            <CategoryBadge Word={"Unread"} />
            <CategoryBadge Word={"Groups"} />
          </View>

          {/* chat section */}
          <View id='chat-section' style={styles.chatSection}>
              <ProfileViewOutside/>
              <ProfileViewOutside/>
              <ProfileViewOutside/>
              <ProfileViewOutside/>
              <ProfileViewOutside/>
              <ProfileViewOutside/>
              <ProfileViewOutside/>
              <ProfileViewOutside/>
              <ProfileViewOutside/>
              <ProfileViewOutside/>
              <ProfileViewOutside/>
              <ProfileViewOutside/>
          </View>
        </ScrollView>
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