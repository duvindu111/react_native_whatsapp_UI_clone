import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CategoryBadge({
    Word,
    IsActive
}:{
    Word: String,
    IsActive?: boolean
}) {
  return (
    <View style={[IsActive ? styles.categoryBadgeActive : styles.categoryBadgeNotActive, styles.categoryBadge]}>
      <Text style={IsActive ? styles.categoryTextActive : styles.categoryTextNotActive}>{Word}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    categoryBadgeActive: {
        backgroundColor: '#D3FFE2',
    },
    categoryBadgeNotActive: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    categoryBadge: {
        paddingHorizontal: 10, 
        paddingVertical: 5,
        alignSelf: 'flex-start',
        borderRadius: 15
    },
    categoryTextActive: {
        color: 'rgba(18, 140, 126, 1)'
    },
    categoryTextNotActive: {
        color: 'rgba(113, 113, 113, 1)'
    }
})