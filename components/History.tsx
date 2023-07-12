import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const History = () => {
  return (
    <View style={styles.historyScreen}>
      <Text>History</Text>
      <Text>History</Text>
      <Text>History</Text>
      <Text>History</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  historyScreen: {
    flex: 12,
    backgroundColor: 'skyblue'
  }
})

export default History