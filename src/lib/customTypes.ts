export interface Doc {
  uid: string,
  name: string,
}

export interface Habit {
  lastChecked: Date,
  streak: number,
  longestStreak: number
}
