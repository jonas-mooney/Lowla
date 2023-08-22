import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';
import ProductInfo from '../components/ProductInfo';
import ScannerHeader from './ScannerHeader';
import { StatusBar } from 'expo-status-bar';
import { runOnJS } from 'react-native-reanimated';

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false)
  const [productInfo, setProductInfo] = useState('')

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true)
    setProductInfo(data)
    console.log('scanned')
  };

  const handleProductInfoDismiss = () => {
    'worklet';
    runOnJS(setScanned)(false)
  }

  return (
    <SafeAreaView style={styles.viewport}>
      <StatusBar style='light'/>
      <BarCodeScanner
      style={[StyleSheet.absoluteFillObject, styles.scanArea]}
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
          <View style={styles.scanAreaBorder}>
            <Text style={styles.screenSubtext}>Barcode Scan</Text>
          </View>
          {scanned && <ProductInfo productInfo={productInfo} handleProductInfoDismiss={handleProductInfoDismiss}/>}
      </BarCodeScanner>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    viewport: {
    flex: 1,
  },
  scanArea: {
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scanAreaBorder: {
    border: 'solid',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    width: '90%',
    height: '40%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  screenSubtext: {
    fontSize: 15,
    color: 'white',
    marginRight: 10,
  },
})

export default Scanner