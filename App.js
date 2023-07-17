import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Scanner from './components/Scanner';
import History from './components/History';
import Overview from './components/Overview';
import Header from './components/Header';
import Footer from './components/Footer';
import InfoModal from './components/Info';
import ScannerHeader from './components/ScannerHeader';

// const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();


export default function App() {
  const [page, setPage] = useState('History')

  return (
    <NavigationContainer>
      <StatusBar style='dark'/>
      {/* <SafeAreaView style={styles.viewport}> */}
        {page !== 'Scanner' ?
        <Header page={page} />
        :
        <></>
        }

        <View style={styles.screenContent}>
          <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
            <Stack.Screen
              name="History"
              component={History}
            />
            <Stack.Screen name="Scanner" component={Scanner} />
            <Stack.Screen name="Overview" component={Overview} />
          </Stack.Navigator>
        </View>


        <Footer 
          handlePageChange={(newPage) => {
            setPage(newPage)
          }}
        />
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  viewport: {
    flex: 1,
  },
  screenContent: {
    flex: 12,
    backgroundColor: 'skyblue'
  },
});

// #9B5DE5 Amethyst