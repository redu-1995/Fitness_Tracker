import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WorkoutCard({ workout, onPress }) {
  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: workout.bgColor }]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {/* Top row with Title and Emoji */}
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {workout.title.split(' ')[0]} Workout {/* Truncates cleanly if title is too long */}
        </Text>
        <Text style={styles.cardEmoji}>{workout.emoji}</Text>
      </View>

      {/* Stats Area */}
      <View style={styles.statsContainer}>
        <Text style={[styles.statText, { color: workout.accentColor }]}>
          ⏱ {workout.duration}
        </Text>
        <Text style={[styles.statText, { color: workout.accentColor }]}>
          🔥 {workout.calories} cal
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    height: 140,
    justifyContent: 'space-between',
    // Subtle shadow depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    flex: 1,
    paddingRight: 4,
  },
  cardEmoji: {
    fontSize: 22,
  },
  statsContainer: {
    gap: 4, // Spacks out duration and calories uniformly
  },
  statText: {
    fontSize: 14,
    fontWeight: '600',
  },
});