import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeeklyGoalAndQuote() {
  const completedDays = 4;
  const totalDays = 7;
  const progressPercent = (completedDays / totalDays) * 100;

  return (
    <View style={styles.container}>
      
      {/* Weekly Goal Card */}
      <View style={styles.goalCard}>
        <View style={styles.goalHeader}>
          <Text style={styles.goalTitle}>Weekly Goal</Text>
          <Text style={styles.goalStats}>
            <Text style={styles.highlightText}>{completedDays}</Text> / {totalDays} workouts
          </Text>
        </View>

        {/* Track Bar */}
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
        </View>
      </View>

      {/* Motivational Quote Divider Section */}
      <View style={styles.quoteContainer}>
        <View style={styles.quoteDecorativeLine} />
        <Text style={styles.quoteText}>
          "Small progress is still progress."
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 30, // Extra bottom margin ensures comfortable scrolling past components
  },
  goalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EAEFF5',
    // Soft drop shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A5568',
  },
  goalStats: {
    fontSize: 14,
    color: '#718096',
    fontWeight: '500',
  },
  highlightText: {
    color: '#2B6CB0', // Cool crisp blue highlighting current habit streaks
    fontWeight: '700',
    fontSize: 16,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#EDF2F7',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#2B6CB0', // Matches highlight color
    borderRadius: 4,
  },
  quoteContainer: {
    marginTop: 35,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  quoteDecorativeLine: {
    width: 40,
    height: 3,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
    marginBottom: 12,
  },
  quoteText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#718096',
    textAlign: 'center',
    lineHeight: 22,
    fontWeight: '500',
  },
});