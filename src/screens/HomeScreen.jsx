import React from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, 
    SafeAreaView
 } from 'react-native'
 import ProgressScreen from './ProgressScreen';
 import ActionButtons from './ActionButtons';
 import FeaturedWorkouts from './FeaturedWorkouts';

export default function HomeScreen(){

    return (
     <SafeAreaView
 style = {styles.safeArea}> 
        <ScrollView contentContainerStyle = {styles.scrollContainer}>
          <View style={styles.mainContent}>
            <View style={styles.headerContainer}>
                 <Text style = {styles.title}>Good Morning</Text>
                 <Text style = {styles.subtitle}>Ready for today's workout?</Text>
            </View>
            <ProgressScreen />
            <ActionButtons />
            </View>
            <FeaturedWorkouts />
        </ScrollView>     
     </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  safeArea :{
    flex: 1,
    backgroundColor: '#fff'
    
    
  },
   mainContent: {
    paddingHorizontal: 20, // Keeps your static elements perfectly uniform
  },
  scrollContainer:{
    paddingHorizontal: 20,
    paddingTop: 20
  },
  headerContainer:{
    marginBottom: 24,
    
  },
  title: {
    fontSize: 28,
    fontWeight:'bold',
    color:'#1a1a1a'
  },
  subtitle:{
    fontSize:18,
    marginTop: 10,
    color: '#666'
  }
})