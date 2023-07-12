import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Header = ({ page }: { page: string }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Favorites</Text>
      <Text style={styles.title}>{page}</Text>
      <Text style={styles.icons}>
        <Ionicons name="information-circle-outline" size={24} color="#9B5DE5" />
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: 'powderblue',
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
    backgroundColor: 'beige'
  },
  title: {
    flex: 3,
    textAlign: 'center',
    backgroundColor: 'powderblue',
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  icons: {
    flex: 1,
    backgroundColor: 'aliceblue',
    textAlign: 'right',
  }
})

export default Header