import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import images from '@/constants/ImagesMapping'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ContainerOne from './ContainerOne';

export default function CommunityOutsideView({
    CommunityImageName
}: {
    CommunityImageName: string
}) {
    return (
        <View style={styles.oneCommunity}>
            <View style={styles.firstRow}>
                <Image
                    style={styles.profilePic}
                    source={images[CommunityImageName as keyof typeof images]}
                />
                <Text style={styles.firstRowText}>UFC</Text>
            </View>
            <View style={styles.secondRow}>
                <View style={styles.secondRowIconOutCont}>
                    <View style={styles.secondRowIconCont}>
                        <MaterialCommunityIcons name="speaker-wireless" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.secondRowTextCont}>
                    <View style={styles.secRowTopRowCont}>
                        <Text style={styles.secondRowFirstText}>Announcements</Text>
                        <Text>7/3/24</Text>
                    </View>
                    <Text style={styles.secondRowSecondText} numberOfLines={1}>Only community admins can add groups.
                        Memebers can suggest groups for admin approval.
                    </Text>
                </View>
            </View>
            <ContainerOne DateTime={'8.00 pm'} Name={'UFC'} ImageName='ufcred'
            Message={"This fighting Nerd's just racking up wins!🤓"}/>
            <View style={styles.fourthRow}>
                <View style={styles.fourthRowIconCont}>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="#7C7C7C" />
                </View>
                <Text style={styles.fourthRowText}>View All</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fourthRowText: {
        color: '#7C7C7C',
        fontSize: 17,
        paddingLeft: 15
    },
    fourthRow: {
        flexDirection: 'row',
        alignItems: 'center',    
    },
    fourthRowIconCont: {
        height: 55,
        width: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secRowTopRowCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2
    },
    secondRowFirstText: {
        fontSize: 18
    },
    secondRowSecondText: {
        color: '#7C7C7C',
        paddingRight: 15,
        fontSize: 15
    },
    secondRowTextCont: {
        marginLeft: 15,
        justifyContent: 'center',
        flex: 1,
    },
    secondRowIconOutCont: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondRowIconCont: {
        backgroundColor: '#D3FFE2',
        height: 45,
        width: 45,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstRowText: {
        fontSize: 18,
        marginLeft: 15
    },
    secondRow: {
        paddingVertical: 15,
        flexDirection: 'row',
    },
    oneCommunity: {
        backgroundColor: 'white',
        paddingHorizontal: 15
    },
    firstRow: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        flexDirection: 'row',
        alignItems: 'center'
    },
    profilePic: {
        width: 55,
        height: 55,
        borderRadius: 50
    },
})