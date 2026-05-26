export const WORKOUTS = [
  {
    id: '1',
    title: 'Chest & Tricep Blast',
    category: 'Strength',
    duration: '45 mins',
    level: 'Intermediate',
    emoji: '💪',
    isFeatured: true,
    bgColor: '#E6FFFA', // Light Teal for Home Screen Card
    accentColor: '#319795',
    calories: 380,
    description: 'A high-intensity upper body hypertrophy session focusing on pushing movements to build power and definition.',
    exercises: [
      { id: 'ex1', name: 'Barbell Bench Press', sets: 4, reps: '8-10', rest: '90s' },
      { id: 'ex2', name: 'Incline Dumbbell Flyes', sets: 3, reps: '12', rest: '60s' },
      { id: 'ex3', name: 'Cable Overhead Tricep Extensions', sets: 3, reps: '15', rest: '60s' },
      { id: 'ex4', name: 'Dips (Bodyweight or Weighted)', sets: 3, reps: 'Failure', rest: '90s' }
    ]
  },
  {
    id: '2',
    title: 'HIIT Cardio Burn',
    category: 'Cardio',
    duration: '25 mins',
    level: 'Beginner',
    emoji: '🏃‍♂️',
    isFeatured: true,
    bgColor: '#FFFAF0', // Light Orange/Yellow
    accentColor: '#DD6B20',
    calories: 290,
    description: 'Quick, explosive intervals designed to skyrocket your heart rate and maximize your caloric burn long after the workout ends.',
    exercises: [
      { id: 'ex5', name: 'Jump Squats', duration: '45s work / 15s rest', sets: 4 },
      { id: 'ex6', name: 'Mountain Climbers', duration: '45s work / 15s rest', sets: 4 },
      { id: 'ex7', name: 'Burpees', duration: '30s work / 30s rest', sets: 4 },
      { id: 'ex8', name: 'High Knees', duration: '45s work / 15s rest', sets: 4 }
    ]
  },
  {
    id: '3',
    title: 'Leg Day Heavy Focus',
    category: 'Strength',
    duration: '50 mins',
    level: 'Advanced',
    emoji: '🏋️‍♀️',
    isFeatured: true,
    bgColor: '#FED7D7', // Light Red
    accentColor: '#E53E3E',
    calories: 450,
    description: 'A demanding lower-body routine emphasizing compound structural lifts to develop raw strength and athletic performance.',
    exercises: [
      { id: 'ex9', name: 'Barbell Back Squats', sets: 4, reps: '6-8', rest: '120s' },
      { id: 'ex10', name: 'Romanian Deadlifts', sets: 4, reps: '10', rest: '90s' },
      { id: 'ex11', name: 'Walking Lunges', sets: 3, reps: '12 per leg', rest: '60s' },
      { id: 'ex12', name: 'Leg Press (Drop Sets)', sets: 3, reps: '15', rest: '60s' }
    ]
  },
  {
    id: '4',
    title: 'Core & Abs Sculpt',
    category: 'Core',
    duration: '15 mins',
    level: 'Beginner',
    emoji: '🧘‍♂️',
    isFeatured: false, // This will show up on List screen, but skip the Home horizontal carousel
    bgColor: '#EBF8FF', // Light Blue
    accentColor: '#3182CE',
    calories: 120,
    description: 'A quick core-conditioning sequence targeting your rectus abdominis, obliques, and deep stabilizing muscle layers.',
    exercises: [
      { id: 'ex13', name: 'Plank Hold', duration: '60s', sets: 3, rest: '30s' },
      { id: 'ex14', name: 'Hanging Knee Raises', sets: 3, reps: '15', rest: '45s' },
      { id: 'ex15', name: 'Russian Twists', sets: 3, reps: '20 total', rest: '45s' }
    ]
  }
];