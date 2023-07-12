import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const ScannerHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        <MaterialCommunityIcons name="flashlight" size={30} color="white" />
      </Text>
      <Text style={styles.icons}>
      <MaterialCommunityIcons name="volume-off" size={30} color="white" />
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: 'transparent',
    flex: .8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 14,
    paddingRight: 14,
  },
  headerText: {
    flex: 1,
    color: '#9B5DE5',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
    // backgroundColor: 'beige'
  },
  icons: {
    flex: 1,
    // backgroundColor: 'aliceblue',
    textAlign: 'right',
  }
})

export default ScannerHeader