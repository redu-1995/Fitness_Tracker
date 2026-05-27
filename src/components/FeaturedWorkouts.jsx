import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { WORKOUTS } from '../data/workouts';
import WorkoutCard from './WorkoutCard'; // <-- Import your brand new component here!

export default function FeaturedWorkouts() {
  const featuredData = WORKOUTS.filter(workout => workout.isFeatured);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>FEATURED WORKOUTS</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollPadding}
      >
        {featuredData.map((item) => (
          <WorkoutCard 
            key={item.id} 
            workout={item}
            onPress={() => console.log(`Open Detail Screen for: ${item.title}`)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: '#A0AEC0',
    letterSpacing: 1.2,
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  scrollPadding: {
    paddingHorizontal: 20,
    paddingBottom: 6,
  },
});