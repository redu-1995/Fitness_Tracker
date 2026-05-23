import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,
    ScrollView
 } from 'react-native';
import { ScrollView } from 'react-native/types_generated/index';


const FEATURED_WORKOUTS = [
    {
        id: '1',
        title: 'Chest Workout',
        duration: '45 mins',
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
        <View>
            <Text>Featured Workouts</Text>
       
        {/* Horizontal Scroll Layer */}

        <ScrollView
        horizontal
        showsHorizontalScrollIndicator = {false}
        contentContainerStyle ={}
        >
            {FEATURED_WORKOUTS.map((workout)=>(
                <TouchableOpacity
                   key = {workout.id}
                   style = {[StyleSheet.card, {backgroundColor: workout.bgColor}]}
                   activeOpacity={0.8}
                >
                    <View>
                        <Text>{workout.emoji}</Text>
                        <View></View>
                    </View>

                </TouchableOpacity>
            ))}
            
            </ScrollView>
             </View>
    )
}