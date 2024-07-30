import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/custom_components/Header'
import FloatingGreenButton from '@/components/custom_components/FloatingGreenButton'
import { MaterialCommunityIcons } from '@expo/vector-icons'; import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import ContainerTwo from '@/components/custom_components/ContainerTwo'
import CallStatus from '@/constants/CallStatus'
import CommunityOutsideView from '@/components/custom_components/CommunityOutsideView'
import HeaderPage from "@/constants/HeaderPage";

export default function communities() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Header LeftText={"Communities"} NoSearchIcon HeaderPage={HeaderPage.COMMUNITY}/>
        </View>
        <View style={styles.container}>
          <ScrollView style={styles.bodyContainer}>
            <View style={styles.newCommunityContainer}>
              <View style={styles.greySquare}>
                <Foundation name="torsos-all" size={36} color="white" />
                <View style={styles.greenPlusCircle}>
                  <Entypo name="plus" size={15} color="white" />
                </View>
              </View>

              <View style={styles.newCommunityTextCont}>
                <Text style={styles.newCommunityText}>New Community</Text>
              </View>
            </View>

            <View id="communitySec" style={styles.communitySec}>
              <CommunityOutsideView CommunityImageName="ufc" />
              <CommunityOutsideView CommunityImageName='ufc'/>
            </View>
          </ScrollView>

          <View style={styles.fillingView}></View>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  fillingView: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  communitySec: {
    marginTop: 8,
    gap: 8
  },
  newCommunityText: {
    fontSize: 20,
  },
  newCommunityTextCont: {
    justifyContent: 'center',
  },
  greenPlusCircle: {
    height: 22,
    width: 22,
    backgroundColor: 'green',
    borderRadius: 10,
    position: 'absolute',
    right: -4,
    bottom: -2,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: 'white',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newCommunityContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  description: {
    color: 'rgba(113, 113, 113, 1)',
    fontSize: 16,
  },
  greySquare: {
    backgroundColor: '#bfbfbf',
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  safeArea: {
    flex: 1,
  },
  bodyContainer: {
    backgroundColor: '#f0f0f0',
    flexGrow: 0,
    marginBottom: 8
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