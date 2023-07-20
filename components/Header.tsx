import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Header = ({ page }: { page: string }) => {
  return (
    <SafeAreaView style={styles.viewport}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Favorites</Text>
          <Text style={styles.title}>{page}</Text>
          <View style={styles.icons}>
            <Ionicons name="trash-outline" size={26} color="#9B5DE5" />
            <Ionicons name="information-circle-outline" size={26} color="#9B5DE5" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewport: {
    flex: .8,
    // backgroundColor: 'beige'
  },
  headerWrapper: {
    flex: .8,
    display: 'flex',
    // backgroundColor: 'blue',
    justifyContent: 'flex-end'
  },
  header: {
    // backgroundColor: 'powderblue',
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
    fontSize: 17,
    fontWeight: '500',
    // backgroundColor: 'beige'
  },
  title: {
    flex: 3,
    textAlign: 'center',
    // backgroundColor: 'powderblue',
    color: '#000',
    fontSize: 17,
    fontWeight: '600',
  },
  icons: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'aliceblue',
    // textAlign: 'right',
  }
})

export default Header