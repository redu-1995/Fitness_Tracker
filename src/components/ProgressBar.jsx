import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressCard() {
  const progressPercent = 65; // This can be dynamic later

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>Today's Progress</Text>
      
      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statIcon}>🔥</Text>
          <Text style={styles.statText}>
            <Text style={styles.statNumber}>320</Text> Calories
          </Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statIcon}>🏋️</Text>
          <Text style={styles.statText}>
            <Text style={styles.statNumber}>2</Text> Workouts
          </Text>
        </View>
      </View>

      {/* Custom Progress Bar */}
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
      </View>
      
      <Text style={styles.progressPercentage}>{progressPercent}% Completed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    // Soft shadows for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    // Elevation for Android
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    fontSize: 22,
    marginRight: 8,
  },
  statText: {
    fontSize: 14,
    color: '#666',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#F0F2F5',
    borderRadius: 5,
    overflow: 'hidden', // Ensures the filling bar doesn't bleed past the rounded corners
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#FF5A5F', // High-energy color for fitness apps
    borderRadius: 5,
  },
  progressPercentage: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
    marginTop: 6,
    fontWeight: '600',
  },
});