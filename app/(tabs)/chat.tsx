import { View, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Header from '@/components/custom_components/Header'
import CategoryBadge from '@/components/custom_components/CategoryBadge'
import ProfileViewOutside from '@/components/custom_components/ContainerOne'
import Footer from '@/components/custom_components/Footer'
import FloatingGreenButton from '@/components/custom_components/FloatingGreenButton'
import { MaterialIcons } from '@expo/vector-icons';

export default function chat() {
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
              <ProfileViewOutside Name={"Aliena Smith"} 
              Message={"I sent you the documents."}
              ImageName='aliena_smith' DateTime={"2.01 am"}
              Muted Pinned Notification NtfCount={5}/>
              <ProfileViewOutside Name={"Darren Till"} 
              Message={"We will be there by noon. Hope you're ready."}
              ImageName='darren_till' DateTime={"7/10/24"}
              Notification NtfCount={1}/>
              <ProfileViewOutside Name={"Ethan"} 
              Message={'Ethan reacted ❤️ to "yeah i will"'}
              ImageName='ethan_two' DateTime={"2.45 am"}
              Notification NtfCount={3}/>
              <ProfileViewOutside Name={"Jorge Dawson"} 
              Message={"I'm sorry, I can't make it today"}
              ImageName='jorge_dawson' DateTime={"1.34 am"}/>
              <ProfileViewOutside Name={"Michael"} 
              Message={"Voice call"}
              ImageName='michael' DateTime={"1.06 am"}
              Notification NtfCount={1}/>
              <ProfileViewOutside Name={"Rose"} 
              Message={"yes🥳🥳🥳"}
              ImageName='rose' DateTime={"Yesterday"}/>
              <ProfileViewOutside Name={"Selena"} 
              Message={"lorem ipsum dolor sit amet consectetur adipiscing elit"}
              ImageName='selena' DateTime={"Yesterday"}/>
              <ProfileViewOutside Name={"Wade"} 
              Message={"lorem ipsum dolor sit amet consectetur adipiscing elit"}
              ImageName='wade' DateTime={"7/9/24"}/>
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