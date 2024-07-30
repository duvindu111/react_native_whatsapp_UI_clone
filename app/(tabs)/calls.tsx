import {ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import Header from '@/components/custom_components/Header'
import FloatingGreenButton from '@/components/custom_components/FloatingGreenButton'
import {Feather, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import ContainerTwo from '@/components/custom_components/ContainerTwo'
import CallStatus from '@/constants/CallStatus'
import HeaderPage from "@/constants/HeaderPage";

export default function calls() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Header LeftText={"Calls"} HeaderPage={HeaderPage.CALLS}/>
        </View>
        <ScrollView style={styles.bodyContainer}>
          <View id='createCallLinkSec' style={styles.createCallLinkContainer}>
            <View style={styles.greenCircle}>
            <Feather name="link-2" size={24} color="white" />
            </View>

            <View >
              {/* topView */}
              <View style={styles.spaceBetween}>
                  <View>
                      <Text style={styles.name}>Create call Link</Text>
                  </View>
              </View>

              {/* bottomView */}
              <View style={[styles.spaceBetween, styles.bottomView]}>
                  <View style={styles.descriptionContainer}>
                      <Text style={styles.description} numberOfLines={1}>Share a link for your Whatsapp call</Text>
                  </View>
              </View>
            </View>
          </View>

          <View id='recentSec'>
              <Text style={styles.recentText}>Recent</Text>
              <View style={styles.recentCallsMidContainer}>
                <ContainerTwo ImageName='wade' Message={"12 July, 6.33 pm"} Name={"Wade"} 
                Call Audio CallStatus={CallStatus.INCOMING}/>
                <ContainerTwo ImageName='darren_till' Message={"12 July, 5.38 pm"} Name={"Darren Till"} 
                Call Audio CallStatus={CallStatus.OUTGOING}/>
                <ContainerTwo ImageName='wade' Message={"12 July, 5.36 pm"} Name={"Wade"} 
                Call Audio CallStatus={CallStatus.MISSED}/>
                <ContainerTwo ImageName='jorge_dawson' Message={"12 July, 3.55 pm"} Name={"Jorge Dawson"} 
                Call Audio CallStatus={CallStatus.OUTGOING}/>
                <ContainerTwo ImageName='darren_till' Message={"12 July, 3.27 pm"} Name={"Darren Till"} 
                Call Video CallStatus={CallStatus.INCOMING}/>
                <ContainerTwo ImageName='jorge_dawson' Message={"12 July, 1.06 am"} Name={"Jorge Dawson"} 
                Call Audio CallStatus={CallStatus.INCOMING}/>
                <ContainerTwo ImageName='wade' Message={"11 July, 10.35 am"} Name={"Wade"} 
                Call Audio CallStatus={CallStatus.INCOMING}/>
                <ContainerTwo ImageName='darren_till' Message={"11 July, 10.04 am"} Name={"Darren Till"} 
                Call Audio CallStatus={CallStatus.OUTGOING}/>
              </View>
              <View style={styles.recentCallsBottomRowInsideCont}>
                <MaterialIcons name="lock-outline" size={16} color="black" />
                <Text>&nbsp;&nbsp;Your personal calls are </Text>
                <Text style={{color:'#0CC143'}}>end-to-end-encrypted</Text>
              </View>
          </View>
        </ScrollView>
         <View> 
        </View>
        <FloatingGreenButton Icon={<MaterialCommunityIcons name="phone-plus" size={24} color="white" />}/> 
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  recentCallsBottomRowInsideCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 35,
    fontSize: 10,
  },
  recentCallsMidContainer: {
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    paddingHorizontal: 15
  },
  recentText: {
    fontSize: 16,
    color: 'rgba(113, 113, 113, 1)',
    marginBottom: 10,
    paddingHorizontal: 15
  },
    createCallLinkContainer: {
      flexDirection: 'row',
      paddingVertical: 20,
      paddingHorizontal: 15
    },
    descriptionContainer: {
    },
    bottomView: {
      marginTop: 3,
      alignItems: 'center'
    },
    description: {
      color: 'rgba(113, 113, 113, 1)',
      fontSize: 16,
    },
    greenCircle: {
      backgroundColor: '#0CC143',
      width: 60,
      height: 60,
      marginRight: 15,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center'
    },
    safeArea: {
      flex: 1,
    },
    chatSection: {
      backgroundColor: 'white',
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
    },
    name: {
      fontSize: 20,
    },
    spaceBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
})