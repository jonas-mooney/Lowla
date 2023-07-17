import { View, Text, StyleSheet, Image, Pressable, Button, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation, ParamListBase } from '@react-navigation/native';

// Added type for useNavigation fix
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const Footer = ({handlePageChange}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const [currentPage, setCurrentPage] = useState('History')


  const navigateWithHeaderUpdate = (newPage: string) => {
    navigation.navigate(newPage)
    handlePageChange(newPage)
    setCurrentPage(newPage)
  }

  return (
    <View style={styles.footer}>

      <Pressable style={styles.iconBox} onPress={() => navigateWithHeaderUpdate('History')}>
        {/* {currentPage == 'History' ? 
          <Image 
          source={require('../assets/grapes-min.png')}
          style={styles.iconImage}
          />
          :
          <Image 
          source={require('../assets/grapes-grey.png')}
          style={styles.iconImage}
        />
        } */}
        
        {currentPage == 'History' ? 
          <><MaterialCommunityIcons name="fruit-grapes" size={30} color="#9B5DE5" /><Text style={styles.iconTextActive}>History</Text></>
        :
          <><MaterialCommunityIcons name="fruit-grapes" size={30} color="#787276" /><Text style={styles.iconText}>History</Text></>
        }
      </Pressable>

      <Pressable style={styles.iconBox} onPress={() => navigateWithHeaderUpdate('Scanner')}>
        {currentPage == 'Scanner' ? 
          <><Ionicons name="barcode-outline" size={30} color="#9B5DE5" /><Text style={styles.iconTextActive}>Scan</Text></>
        :
          <><Ionicons name="barcode-outline" size={30} color="#787276" /><Text style={styles.iconText}>Scan</Text></>
        }
      </Pressable>

      {/* <Pressable style={styles.iconBox} onPress={() => navigation.navigate('Overview')}> */}
      <Pressable style={styles.iconBox} onPress={() => navigateWithHeaderUpdate('Overview')}>
      {currentPage == 'Overview' ? 
        <><Feather name="bar-chart" size={30} color="#9B5DE5" /><Text style={styles.iconTextActive}>Overview</Text></>
        :
        <><Feather name="bar-chart" size={30} color="#787276" /><Text style={styles.iconText}>Overview</Text></>
      }
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  // footer: {
  //   flex: 1.45,
  //   // backgroundColor: 'steelblue',
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems: 'flex-start',
  //   justifyContent: 'space-around',
  //   paddingLeft: 14,
  //   paddingRight: 14,
  //   paddingTop: 5,
  // },
  footer: {
    // flex: 1.45,
    bottom: 34,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 5,
  },
  iconBox: {
    // backgroundColor: 'maroon',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  iconText: {
    fontSize: 12,
    color: '#787276',
  },
  iconTextActive: {
    fontSize: 12,
    color: '#9B5DE5',
  },
  iconImage: {
    height: 30,
    width: 30,
  }
})

export default Footer