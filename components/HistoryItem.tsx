import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const HistoryItem = () => {

  return (
    <View style={styles.historyItem}>
      <View style={styles.imageBox}>
        <Image source={require('../assets/wheaties.png')} style={styles.productImage}/>
      </View>
      <Text>HistoryItem</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  historyItem: {
    // backgroundColor: '#FFF',
    backgroundColor: 'beige',
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    padding: 20,
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderColor: '#dadfea'
  },
  imageBox: {
    backgroundColor: 'slategrey',
    width: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  productImage: {
    height: 80,
    width: 40
  }
})

export default HistoryItem

//image
//title
//subtitle
//rating
//date