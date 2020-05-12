import reducer from './moodReducer';
import { drinkCoffee } from '../actions/moodActions';

describe('moodReducer', () => {
  const state = [];
  const action = drinkCoffee({
    coffees: 3
  });

  const newState = reducer(state, action);

  expect(newState).toEqual([
    {
      coffees: 3
    }
  ]);
});
