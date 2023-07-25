import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HistoryItem = () => {

  return (
    <View style={styles.historyBox}>
      <View style={styles.imageBox}>
        <Image source={require('../assets/wheaties.png')} style={styles.productImage}/>
      </View>
      <View style={styles.historyDetails}>
        <View style={styles.detailData}>
          <Text style={{ fontSize: 17, fontWeight: '500' }}>Honey bunches of oats</Text>
          <Text style={[styles.grey, { color: '#8A8B8D' }]}>General Mills</Text>
        </View>
        <View style={styles.detailData}>
          <Text style={ styles.grey }><View style={ styles.ratingCircle } /> Good</Text>
          <Text style={ styles.grey }><Feather name="clock" size={13} color="#8A8B8D" /> 3 weeks ago</Text>
        </View>
      </View>
      <View style={styles.openIconBox}>
        <MaterialCommunityIcons name="chevron-right" size={25} color="#c4c4c4" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  historyBox: {
    backgroundColor: '#FFF',
    // backgroundColor: 'beige',
    display: 'flex',
    flexDirection: 'row',
    height: 118,
    paddingVertical: 14,
    paddingLeft: 20,
    borderTopWidth: .5,
    borderColor: '#dadfea'
  },
  imageBox: {
    // backgroundColor: 'slategrey',
    height: 90,
    width: 90,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  productImage: {
    height: 80,
    width: 40
  },
  historyDetails: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  detailData: {
    display: 'flex',
    justifyContent: 'space-between',
    // backgroundColor: 'beige',
    height: 38
  },
  grey: {
    color: '#8A8B8D',
  },
  ratingCircle: {
    backgroundColor: '#38D266',
    width: 12,
    height: 12,
    borderRadius: 10
  },
  openIconBox: {
    flex: .5,
    // backgroundColor: 'beige',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
})

export default HistoryItem

//image
//title
//subtitle
//rating
//date