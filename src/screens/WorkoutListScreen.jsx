import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
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
            <Text style={styles.screenTitle}>Browse Workouts</Text>
            <Text style={styles.subtitle}>Pick a routine tailored to your goals today</Text>

            {/* Horizontal Category Selector Pills */}
            <View style={styles.categoryRow}>
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
            </View>
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
    backgroundColor: '#FAFBFC',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 15,
    color: '#718096',
    marginTop: 4,
  },
  categoryRow: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 8,
  },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E2E8F0',
  },
  activePill: {
    backgroundColor: '#1A1A1A', // High contrast active selection state
  },
  pillText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A5568',
  },
  activePillText: {
    color: '#FFFFFF',
  },
  cardWrapper: {
    marginBottom: 14, // Spacing between stacked vertical cards
    width: '100%',   // Card expands to utilize entire safe width
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  emptyText: {
    color: '#718096',
    fontSize: 15,
  }
});