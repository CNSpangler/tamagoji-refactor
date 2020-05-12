import reducer from './moodReducer';
import { drinkCoffee } from '../actions/moodActions';

describe('moodReducer', () => {
  it('handles the DRINK_COFFEE action', () => {
    const state = { coffees: 0 };
    const action = drinkCoffee();
  
    const newState = reducer(state, action);
  
    expect(newState).toEqual(
      {
        coffees: 1
      }
    );  
  });
});

describe