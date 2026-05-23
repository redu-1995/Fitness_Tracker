import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ActionButtons() {
  return (
    <View style={styles.container}>
      
      {/* Primary Button: Start Workout */}
      <TouchableOpacity 
        style={styles.primaryButton} 
        activeOpacity={0.8}
        onPress={() => console.log('Start Workout Pressed')}
      >
        <Text style={styles.primaryButtonText}>🚀 Start Workout</Text>
      </TouchableOpacity>

      {/* Secondary Button: View Progress */}
      <TouchableOpacity 
        style={styles.secondaryButton} 
        activeOpacity={0.7}
        onPress={() => console.log('View Progress Pressed')}
      >
        <Text style={styles.secondaryButtonText}>📊 View Progress</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Aligns buttons side-by-side
    justifyContent: 'space-between',
    marginVertical: 15,
    gap: 12, // Modern layout property to create clean spacing between items
  },
  primaryButton: {
    flex: 1, // Ensures both buttons take up equal half widths
    backgroundColor: '#1A1A1A', // Bold dark aesthetic, or use your app's brand color
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    // Subtle lift shadow
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
  secondaryButton: {
    flex: 1,
    backgroundColor: '#F5F7FA', // Soft gray background to look clickable but secondary
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EAEFF5',
  },
  secondaryButtonText: {
    color: '#4A5568', // Subtle text color so it doesn't compete with the primary button
    fontSize: 16,
    fontWeight: '600',
  },
});