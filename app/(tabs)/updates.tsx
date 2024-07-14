import { View, StyleSheet, ScrollView, Text, Image } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Header from '@/components/custom_components/Header'
import ProfileViewOutside from '@/components/custom_components/ContainerOne'
import FloatingGreenButton from '@/components/custom_components/FloatingGreenButton'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import UpdateStatusImageText from '@/components/custom_components/UpdateStatusImageText'
import FindChannelBox from '@/components/custom_components/FindChannelBox'

export default function updates() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Header LeftText={"Updates"} />
        </View>
        <ScrollView style={styles.bodyContainer}>
          {/* category section */}
          <View id='status-section'>
            <View style={styles.stTopRow}>
              <Text style={styles.stTopRowText}>Status</Text>
              <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.stBottomRow}>
                <View id='my-status'>
                  <View style={styles.myStatusImageContainer}>
                    <Image
                      style={styles.myStatus}
                      source={require('@/assets/images/profile-pic/wade.jpg')}
                    />
                    <View style={styles.myStatusDot}>
                      <Entypo name="plus" size={15} color="white" />
                    </View>
                  </View>
                  <Text style={styles.statusText}>My status</Text>
                </View>
                <UpdateStatusImageText ImageName='rose' Name='Rose'/>
                <UpdateStatusImageText ImageName='selena' Name='Selena'/>
                <UpdateStatusImageText ImageName='wade' Name='Wade'/>
                <UpdateStatusImageText ImageName='michael' Name='Michael'/>
                <UpdateStatusImageText ImageName='jorge_dawson' Name='Jorge Dawson'/>
                <UpdateStatusImageText ImageName='ethan_two' Name='Ethan'/>
              </View>
            </ScrollView>
          </View>

          <View id='channels-section'>
            <View style={styles.chTopRow}>
              <Text style={styles.chTopRowText}>Channels</Text>
              <Entypo name="plus" size={24} color="black" />
            </View> 
            <View style={styles.chBottomSection}>
                <ProfileViewOutside Name={"Real Madrid C.F."} 
                ImageName='realmadrid'
                Message={"🆕 We've got a BRAND-NEW episode ofCampo de"} DateTime={"9.30 pm"} 
                Notification NtfCount={4}/>
                <ProfileViewOutside Name={"Liverpool Football Club"} 
                ImageName='liverpool'
                Message={"🎥 Arne Slot reflects on the first week as the Reds begin"} 
                DateTime={"8.35 pm"} 
                Notification NtfCount={8}/>
                <ProfileViewOutside Name={"Sporty.lk"} 
                ImageName='sporty'
                Message={"📷 Happy Retirement Jimmy !! ❤️👏"} DateTime={"6.33 pm"} 
                Notification NtfCount={2}/>
                <ProfileViewOutside Name={"PFL MMA"} 
                ImageName='pflmma'
                Message={"https://africa.espn.com/mma/story/_/id/40536871/mma-francis"} 
                DateTime={"5.55 am"} />
                <ProfileViewOutside Name={"UFC"} 
                ImageName='ufc'
                Message={"📷 Put your name on it! ✍️ Tracy Cortez all smiles"} 
                DateTime={"7/10/24"}/>
                <ProfileViewOutside Name={"MMA Fighting"} 
                ImageName='mmafighting' 
                Message={"📷 Conor McGregor details his toe injury and vows to 'get this back'"}
                DateTime={"6/21/24"} NtfCount={7}/>
                <ProfileViewOutside Name={"WPS"}
                ImageName='wps'
                Message={"📷 https://youtu.be/FZu9p5F3Fek?si=ggP8KEN"}
                DateTime={"7/09/24"} NtfCount={75}/>
            </View>
          </View>
          <View id='find-channels-section' style={styles.fchSection}>
            <View style={styles.fchTopRow}>
              <Text style={styles.fchTopRowText}>Find channels</Text>
              <View style={styles.fchTopRight}>
                  <Text style={{fontSize: 16, color: 'green'}}>See all</Text>
                  <Entypo name="chevron-right" size={22} color="green" />
              </View>
            </View> 
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
              <View style={styles.fchBottomSection}>
                <FindChannelBox ImageName={"uefa"} Name='UEFA'/>
                <FindChannelBox ImageName={"whatsapp"} Name='WhatsApp'/>
                <FindChannelBox ImageName={"ufc"} Name='UFC'/>
                <FindChannelBox ImageName={"pflmma"} Name='PFL MMA'/>
                <FindChannelBox ImageName={"rockstargames"} Name='Rockstar Games'/>
                <FindChannelBox ImageName={"mmafighting"} Name='MMA Fighting'/>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        <View>
          {/* footer */}
          {/* <Footer Updates ChatCountNotification ChatNotificationCount={5}
            UpdatesNotification
            CallCountNotification CallNotificationCount={7} /> */}
        </View>
        <View style={styles.createBtnContainer}>
          <MaterialIcons name="create" size={24} color="rgba(0, 0, 0, 0.8)" />
        </View>
        <FloatingGreenButton Icon={<MaterialIcons name="photo-camera" size={24} color="white" />}/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  fchBottomSection: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    gap: 10
  },
  fchTopRight: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  createBtnContainer:{
    position: 'absolute',
    bottom: 105,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 18,
    backgroundColor: 'rgba(234, 234, 234, 1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fchSection: {
    paddingBottom: 170
  },
  fchTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  fchTopRowText: {
    fontSize: 16,
  },
  chBottomSection: {
    paddingHorizontal: 15,
  },
  chTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  chTopRowText: {
    fontSize: 20,
    letterSpacing: 1
  },
  statusText: {
    textAlign: 'center',
    fontSize: 13
  },
  stBottomRow: {
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    gap: 20,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
  },
  myStatusImageContainer: {
    width: 60,
    height: 60,
    marginBottom: 8
  },
  myStatusDot: {
    height: 22,
    width: 22,
    backgroundColor: 'green',
    borderRadius: 10,
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: 'white',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myStatus: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  stTopRowText: {
    fontSize: 20,
    letterSpacing: 1
  },
  stTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  safeArea: {
    flex: 1,
  },
  bodyContainer: {
    backgroundColor: 'white',
  },
})