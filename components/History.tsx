import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HistoryItem from './HistoryItem'

const History = () => {
  return (
    <ScrollView>
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  // viewport: {
  //   flex: 1,
  // },
  // historyScreen: {
  //   flex: 12,
  //   backgroundColor: 'skyblue'
  // },
})

export default History