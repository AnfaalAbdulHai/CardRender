import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import SecondComponent from './Components/SecondComponent';
import StoreCards from './Components/CardRender';

const App = () => {
  return (
    <View style={{ display: 'table', clear: 'both',}}>
      {/* <View style={styles.centeredContainer}>
        <Text style={styles.centeredText}>Hello React Native 1</Text>
      </View>
      <SecondComponent/> */}
      <StoreCards/>
    </View>
  );
};

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
    height: 300,
    backgroundColor: 'rgb(126, 162, 160)',
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

export default App;
