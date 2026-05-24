import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,
    ScrollView } from 'react-native';

const FEATURED_WORKOUTS = [
    {
        id: '1',
        title: 'Chest Workout',
        duration: '45 mins',
        level: 'Intermediate',
        emoji: '💪',
        bgColor: '#E6FFFA',
        accentColor: '#319795'
    },
    {
    id: '2',
    title: 'Cardio Burn',
    duration: '25 mins',
    level: 'Beginner',
    emoji: '🏃‍♂️',
    bgColor: '#FFFAF0', // Light Orange/Yellow
    accentColor: '#DD6B20',
  },
  {
    id: '3',
    title: 'Leg Day',
    duration: '50 mins',
    level: 'Advanced',
    emoji: '🏋️‍♀️',
    bgColor: '#FED7D7', // Light Red
    accentColor: '#E53E3E',
  },
]

export default function FeaturedWorkouts(){
    return(
        <View style = {styles.sectionContainer}>
            <Text style = {styles.sectionTitle}>Featured Workouts</Text>
       
        {/* Horizontal Scroll Layer */}

        <ScrollView
        horizontal
        showsHorizontalScrollIndicator = {false}
        contentContainerStyle ={styles.cardScrollContainer}
        >
            {FEATURED_WORKOUTS.map((workout)=>(
                <TouchableOpacity
                   key = {workout.id}
                   style = {[styles.card, {backgroundColor: workout.bgColor}]}
                   activeOpacity={0.8}
                >
                    <View style = {styles.cardHeader}>
                        <Text style = {styles.cardEmoji}>{workout.emoji}</Text>
                        <View style={[styles.levelTag, { backgroundColor: workout.accentColor }]}>
                            <Text style={styles.levelTagText}>{workout.level}</Text>
                        </View>
                    </View>
                    <Text style = {styles.cardTitle}>{workout.title}</Text>
                    <Text style = {styles.cardDuration}>⏱ {workout.duration}</Text>

                </TouchableOpacity>
            ))}
            
            </ScrollView>
             </View>
    )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 25,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 14,
    paddingHorizontal: 20, // Aligns title perfectly with your screen edges
  },
  cardsScrollContainer: {
    paddingHorizontal: 20, // Allows the first and last card to have breathing room when scrolling
    paddingBottom: 10, 
  },
  card: {
    width: 220, // Fixed width sets a predictable sizing scale for swiping
    borderRadius: 18,
    padding: 18,
    marginRight: 16,
    // Soft subtle depth shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardEmoji: {
    fontSize: 28,
  },
  levelTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  levelTagText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 6,
  },
  cardDuration: {
    fontSize: 13,
    fontWeight: '600',
  },
});