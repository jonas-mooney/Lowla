import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'

const Info = () => {
  return (
    <Modal animationType='slide' transparent={true}>
      <View style={styles.modalContent}>
        <Text>
          Hello
        </Text>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    height: '30%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
    padding: 30,
    zIndex: 1
  }
})

export default Info