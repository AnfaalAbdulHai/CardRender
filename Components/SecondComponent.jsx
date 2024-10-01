import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SecondComponent = () => {
  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.centeredText}>Hello React Native 2</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    centeredContainer: {
      height:300,
      backgroundColor: 'rgba(255, 99, 71, 0.7)',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 3
    },
    centeredText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 40,
    },
    image: {
      width: '100%',
      height: 250,
      margin: 0,
    },
  });
  
export default SecondComponent