import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ActionButtons() {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.primaryButton} 
        activeOpacity={0.8}
        onPress={() => console.log('Start Workout Pressed')}
      >
        <Text style={styles.primaryButtonText}>🚀 Start Workout</Text>
      </TouchableOpacity>

      {/* Row 2: Secondary Split Buttons */}
      <View style={styles.secondaryRow}>
        <TouchableOpacity 
          style={styles.secondaryButton} 
          activeOpacity={0.7}
          onPress={() => console.log('View Progress Pressed')}
        >
          <Text style={styles.secondaryButtonText}>📊 View Progress</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton} 
          activeOpacity={0.7}
          onPress={() => console.log('Browse Workouts Pressed')}
        >
          <Text style={styles.secondaryButtonText}>🔍 Browse Workouts</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 18,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: '#A0AEC0', // Subtle uppercase gray label
    letterSpacing: 1.2,
    marginBottom: 10,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#1A1A1A',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12, // Spacing between the top button and the bottom row
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12, // Automatically handles equal spacing between the two nested items
  },
  secondaryButton: {
    flex: 1, // Ensures both split buttons take up exactly 50% of the remaining width
    backgroundColor: '#F5F7FA',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EAEFF5',
  },
  secondaryButtonText: {
    color: '#4A5568',
    fontSize: 14, // Slightly smaller text so it fits comfortably on smaller screens
    fontWeight: '600',
  },
});