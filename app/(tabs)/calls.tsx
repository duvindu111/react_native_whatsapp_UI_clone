import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/custom_components/Header'
import FloatingGreenButton from '@/components/custom_components/FloatingGreenButton'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ContainerTwo from '@/components/custom_components/ContainerTwo'

export default function calls() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Header LeftText={"Calls"} />
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
              <Text style={{fontSize: 16}}>Recent</Text>
              <ContainerTwo ImageName='wade' Message={"12 July, 6.33 pm"} Name={"Wade"} 
              Call Audio/>
          </View>
        </ScrollView>
         <View> 
        </View>
        <FloatingGreenButton Icon={<MaterialIcons name="chat" size={24} color="white" />}/> 
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    createCallLinkContainer: {
      flexDirection: 'row',
      paddingVertical: 20
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
      paddingHorizontal: 15,
      paddingBottom: 90
    },
    bodyContainer: {
      backgroundColor: 'white',
      paddingHorizontal: 15
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