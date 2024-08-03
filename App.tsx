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
import Contact from './Contact';

const App = () : JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView style={styles.darkTheme} >
      <ScrollView>
        <View >
          <View style={styles.headerContainer}>
            <Text style={[styles.header,styles.darkTheme]}>Next Travel</Text>
          </View>
          <View>
            <Text style={[styles.header,styles.darkTheme]}>Silver Package</Text>
            <FlatCards/>
          </View>
          <View>
            <Text style={[styles.header,styles.darkTheme]}>Gold Package</Text>
            <ElevatedCards/>
          </View>
          <View>
            <Text style={[styles.header,styles.darkTheme]}>Diamond package</Text>
            <FancyCard/>
          </View>
          <View>
            <Contact/>
          </View>
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
  darkTheme:{
    backgroundColor: '#121212',
    color:'white'
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
