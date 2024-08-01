import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  useColorScheme,
  SafeAreaView,
  ScrollView
} 
from 'react-native';
import FlatCards from './FlatCards';
import ElevatedCards from './ElevatedCards';
import FancyCard from './FancyCard';

const App = () : JSX.Element => {
  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Next Travel</Text>
        </View>
        <View>
          <Text style={styles.headingText}>Silver Package</Text>
          <FlatCards/>
        </View>
        <View>
          <Text style={styles.headingText}>Gold Package</Text>
          <ElevatedCards/>
        </View>
        <View>
          <Text style={styles.headingText}>Diamond package</Text>
          <FancyCard/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer:{
    flex:1,
    alignContent: 'center',
    width: '100%',
  },
  header:{
    fontSize: 24,
    fontWeight: 'bold',
    padding:5
  },
  headingText:{
    fontSize:18,
    fontWeight: 'bold',
    padding: 5,
    alignItems: 'center',
    textAlign: 'center'
  }
})

export default App;
