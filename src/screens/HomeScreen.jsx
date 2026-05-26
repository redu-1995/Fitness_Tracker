import React from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, 
    SafeAreaView
 } from 'react-native'
 import ProgressBar from '../components/ProgressBar';
 import ActionButtons from '../components/ActionButtons';
 import WeeklyGoalAndQuote from '../components/WeeklyGoalAndQuote';
import FeaturedWorkouts from '../components/FeaturedWorkouts';
export default function HomeScreen(){

    return (
     <SafeAreaView
 style = {styles.safeArea}> 
        <ScrollView contentContainerStyle = {styles.scrollContainer}>
            <View style={styles.headerContainer}>
                 <Text style = {styles.title}>Good Morning</Text>
                 <Text style = {styles.subtitle}>Ready for today's workout?</Text>
            </View>
            <ProgressBar />
            <ActionButtons />

            <FeaturedWorkouts />
            <View style={styles.mainContent}>
          <WeeklyGoalAndQuote />
        </View>
        </ScrollView>     
     </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  safeArea :{
    flex: 1,
    backgroundColor: '#fff'
    
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