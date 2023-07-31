import { View, Text, Modal, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const ProductInfo = ({productInfo, setScanned}) => {
  const translateY = useSharedValue(0)
  const context = useSharedValue({ y: 0 })

  const gesture = Gesture.Pan()
  .onStart(() => {
    context.value = { y: translateY.value }
  })
  .onUpdate((e) => {
    translateY.value = e.translationY + context.value.y
    translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT)
  })
  .onEnd(() => {
    if (translateY.value > -SCREEN_HEIGHT / 3) {
      translateY.value = withSpring(0, {damping: 10, mass: 1})
      setScanned(false)
    } else if (translateY.value > -SCREEN_HEIGHT / 1.5) {
      translateY.value = withSpring(-SCREEN_HEIGHT, {damping: 10, mass: 1})
    }
  })

  const popupStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }]
    }
  })

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 2.6, {
      damping: 10,
      mass: 1
    })
  }, [])

  return (
    // <Modal animationType='slide' transparent={true}>
    //   <View style={styles.modalContent}>
    //     <View style={styles.line} />
    //     <Text>
    //       {productInfo}
    //     </Text>
    //   </View>
    // </Modal>

    // <Modal animationType='slide' transparent={true}>
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.modalContent, popupStyle]}>
        <View style={styles.line} />
        <Text>
          {productInfo}
        </Text>
      </Animated.View>
    </GestureDetector>
    // </Modal>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    top: SCREEN_HEIGHT + 50,
    height: '90%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
    padding: 30,
    paddingTop: 15,
    zIndex: 1
  },
  line: {
    width: 38,
    height: 5,
    backgroundColor: '#c4c4c4',
    borderRadius: 10,
    alignSelf: 'center'
  }
})

export default ProductInfo