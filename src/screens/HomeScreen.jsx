import React from 'react';
<<<<<<< HEAD
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
=======
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

// Import all your dashboard child components
import ProgressBar from '../components/ProgressBar';
import ActionButtons from '../components/ActionButtons';
import FeaturedWorkouts from '../components/FeaturedWorkouts'; // The container we built
import WeeklyGoalAndQuote from '../components/WeeklyGoalAndQuote';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* The master vertical container that lets the whole page scroll.
        Notice we don't put horizontal padding on this ScrollView directly.
      */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* SECTION 1: Welcome Header, Daily Progress, and Action Grid */}
        <View style={styles.paddedContent}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Good Morning</Text>
            <Text style={styles.subtitle}>Ready for today's workout?</Text>
          </View>

          <ProgressBar />
          <ActionButtons />
        </View>

        {/* SECTION 2: The Horizontal Featured Carousel */}
        {/* We place this outside of our 'paddedContent' wrapper so the 
          cards can scroll seamlessly all the way to the screen edges!
        */}
        <FeaturedWorkouts />

        {/* SECTION 3: Habit Tracker & Motivational Quote */}
        <View style={styles.paddedContent}>
          <WeeklyGoalAndQuote />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
>>>>>>> 6c54f1565c46c5da6ff78d1f83b3bd905ea74ab5
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#fff'
    
=======
    backgroundColor: '#FAFBFC', // Clean light gray canvas
  },
  scrollContainer: {
    paddingVertical: 20, // Breathing space at the very top and bottom of the page
>>>>>>> 6c54f1565c46c5da6ff78d1f83b3bd905ea74ab5
  },
  paddedContent: {
    paddingHorizontal: 20, // Keeps your main cards aligned to a beautiful 20px grid gutter
  },
  headerContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    marginTop: 4,
  }
});