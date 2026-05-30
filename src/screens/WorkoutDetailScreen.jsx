import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { WORKOUTS } from '../data/workouts';

export default function WorkoutDetailScreen({ route, navigation }) {
  // 1. Safe extraction of the route parameter bundle passed via navigation
  const { workoutId } = route.params || {};
  
  // 2. Query our local data array to isolate the selected workout details
  const workout = WORKOUTS.find(w => w.id === workoutId);

  // Fallback UI safeguard if no matching workout record is found
  if (!workout) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorText}>Workout routine not found.</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Return to Browse</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      
      {/* ─── 1. HEADER SECTION ─── */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButtonCircle} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {workout.title}
        </Text>
        <Text style={styles.headerEmoji}>{workout.emoji}</Text>
      </View>

      {/* Main content body containing scroll components */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Description Intro */}
        <Text style={styles.description}>{workout.description}</Text>

        {/* ─── 2. STATS CARD ─── */}
        <View style={[styles.statsCard, { backgroundColor: workout.bgColor }]}>
          <View style={styles.statColumn}>
            <Text style={styles.statLabel}>DURATION</Text>
            <Text style={[styles.statValue, { color: workout.accentColor }]}>⏱ {workout.duration}</Text>
          </View>
          <View style={styles.dividerLine} />
          <View style={styles.statColumn}>
            <Text style={styles.statLabel}>EST. BURN</Text>
            <Text style={[styles.statValue, { color: workout.accentColor }]}>🔥 {workout.calories} cal</Text>
          </View>
          <View style={styles.dividerLine} />
          <View style={styles.statColumn}>
            <Text style={styles.statLabel}>DIFFICULTY</Text>
            <Text style={[styles.statValue, { color: workout.accentColor }]}>📈 {workout.level}</Text>
          </View>
        </View>

        {/* ─── 3. EXERCISE LIST SECTION ─── */}
        <Text style={styles.sectionTitle}>EXERCISES ({workout.exercises.length})</Text>
        
        <View style={styles.exerciseContainer}>
          {workout.exercises.map((exercise, index) => (
            <View key={exercise.id} style={styles.exerciseRow}>
              {/* Order Number Bullet */}
              <View style={[styles.numberIndex, { backgroundColor: workout.bgColor }]}>
                <Text style={[styles.numberIndexText, { color: workout.accentColor }]}>
                  {index + 1}
                </Text>
              </View>

              {/* Core Exercise Text Data Block */}
              <View style={styles.exerciseDetails}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                
                {/* Dynamically display repetitions or timed sets values based on schema */}
                <Text style={styles.exerciseMetrics}>
                  {exercise.sets} sets {exercise.reps ? `× ${exercise.reps}` : `| ${exercise.duration}`}
                  {exercise.rest && `  •  Rest: ${exercise.rest}`}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* ─── 4. START BUTTON ─── */}
      <View style={styles.actionFooter}>
        <TouchableOpacity 
          style={styles.startButton} 
          activeOpacity={0.8}
          onPress={() => console.log(`Starting execution tracking mode for workout ID: ${workout.id}`)}
        >
          <Text style={styles.startButtonText}>Start Workout Routine</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFBFC',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Provides safety spacing so the bottom sticky button never covers up text
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FAFBFC',
  },
  backButtonCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  backArrow: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4A5568',
    marginTop: -2, // Center alignment optical adjustment
  },
  headerTitle: {
    flex: 1,
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  headerEmoji: {
    fontSize: 24,
  },
  description: {
    fontSize: 15,
    color: '#718096',
    lineHeight: 22,
    marginVertical: 12,
  },
  statsCard: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 16,
    marginVertical: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statColumn: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#718096',
    letterSpacing: 1,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 14,
    fontWeight: '700',
  },
  dividerLine: {
    width: 1,
    height: 28,
    backgroundColor: 'rgba(0,0,0,0.06)',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#A0AEC0',
    letterSpacing: 1.2,
    marginTop: 24,
    marginBottom: 12,
  },
  exerciseContainer: {
    gap: 12,
  },
  exerciseRow: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAEFF5',
  },
  numberIndex: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  numberIndexText: {
    fontWeight: '700',
    fontSize: 14,
  },
  exerciseDetails: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  exerciseMetrics: {
    fontSize: 13,
    color: '#718096',
  },
  actionFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FAFBFC',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 24, // Comfortable clearance for gesture/navigation bars
    borderTopWidth: 1,
    borderColor: '#EAEFF5',
  },
  startButton: {
    backgroundColor: '#1A1A1A',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#718096',
    marginBottom: 14,
  },
});