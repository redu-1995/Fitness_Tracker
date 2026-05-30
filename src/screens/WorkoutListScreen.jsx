import React, { useState } from 'react';
import { ScrollView,View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { WORKOUTS } from '../data/workouts';
import WorkoutCard from '../components/WorkoutCard';

const CATEGORIES = ['All', 'Strength', 'Cardio', 'Core'];

export default function WorkoutListScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 1. Filter data based on selected category pill
  const filteredWorkouts = selectedCategory === 'All'
    ? WORKOUTS
    : WORKOUTS.filter(workout => workout.category === selectedCategory);

  return (
    <SafeAreaView style={styles.safeArea}>
      
      {/* List Header Components wrapped inside FlatList to scroll away naturally */}
      <FlatList
        data={filteredWorkouts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        
        // Header element rendering
        ListHeaderComponent={
          <View style={styles.headerContainer}>
              <Text style={styles.screenTitle}>
              Find Your Workout 💪
            </Text>

            <Text style={styles.subtitle}>
              Choose a workout and stay consistent with your fitness goals.
            </Text>

            {/* Horizontal Category Selector Pills */}
            <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.categoryRow}
>
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <TouchableOpacity
                    key={category}
                    style={[styles.pill, isActive && styles.activePill]}
                    onPress={() => setSelectedCategory(category)}
                  >
                    <Text style={[styles.pillText, isActive && styles.activePillText]}>
                      {category}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        }

        // Render each card vertically
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <WorkoutCard 
              workout={item} 
              onPress={() => navigation.navigate('WorkoutDetailScreen', { workoutId: item.id })}
            />
          </View>
        )}

        // Custom clean element to show if a filtered category is empty
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No workouts found in this category yet. 🏋️‍♂️</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },

  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  headerContainer: {
    paddingTop: 20,
    marginBottom: 28,
  },

  screenTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.5,
  },

  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 6,
    lineHeight: 22,
  },

  categoryRow: {
    flexDirection: 'row',
    marginTop: 22,
    flexWrap: 'wrap',
  },

  pill: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    marginRight: 10,
    marginBottom: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  activePill: {
    backgroundColor: '#FF5A5F',
  },

  pillText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
  },

  activePillText: {
    color: '#FFFFFF',
  },

  cardWrapper: {
    marginBottom: 18,
  },

  emptyContainer: {
    marginTop: 60,
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 15,
    color: '#9CA3AF',
    textAlign: 'center',
  },
});