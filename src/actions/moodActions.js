export const ADD_MOOD = 'ADD_MOOD';
export const addMood = (mood) => ({
  type: ADD_MOOD,
  payload: {
    mood
  }
});
