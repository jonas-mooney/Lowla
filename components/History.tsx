import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HistoryItem from './HistoryItem'

const itemArray = [
  {
    image: "../assets/wheaties.png",
    title: "Honey Bunches of Oats",
    brand: "General Mills",
    rating: "Good",
    date: "3 weeks ago"
  },
  {
    image: '../assets/dewey.png',
    title: "Dewey Day Cream",
    brand: "Tatcha",
    rating: "Excellent",
    date: "1 weeks ago"
  },
]

const History = () => {

  
  return (
    <ScrollView>
      {itemArray.map(({image, title, brand, rating, date}) => (
        <HistoryItem key={title} productImage={image} brandName={brand} />
      ))}
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
