import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WorkoutCard({ workout, onPress }) {
  // Gracefully handles fallback if workout titles are formatted differently
  const displayTitle = workout.title.includes('&') 
    ? `${workout.title.split(' ')[0]} Workout` 
    : workout.title;

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: workout.bgColor || '#F5F7FA' }]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {/* Top Section: Title & Icon */}
      <View style={styles.headerRow}>
        <Text style={styles.title} numberOfLines={2}>
          {displayTitle}
        </Text>
        <Text style={styles.emoji}>{workout.emoji || '💪'}</Text>
      </View>

      {/* Bottom Section: Specific Metrics */}
      <View style={styles.metricsContainer}>
        <Text style={[styles.metricText, { color: workout.accentColor || '#4A5568' }]}>
          ⏱ {workout.duration}
        </Text>
        <Text style={[styles.metricText, { color: workout.accentColor || '#4A5568' }]}>
          🔥 {workout.calories} cal
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 190, // Fixed layout width matching your structural UI mockup
    height: 140, // Uniform height constraint for horizontal list alignment
    borderRadius: 16,
    padding: 16,
    marginRight: 14,
    justifyContent: 'space-between', // Pushes title to top and stats to bottom
    // Elevation shadows for layered design depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    flex: 1, // Allows text wrapper to break into newlines cleanly without clipping
    paddingRight: 6,
    lineHeight: 22,
  },
  emoji: {
    fontSize: 22,
  },
  metricsContainer: {
    gap: 4, // Clean structural alignment spacing rule
  },
  metricText: {
    fontSize: 14,
    fontWeight: '600',
  },
});