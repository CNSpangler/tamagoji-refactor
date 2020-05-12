import reducer from './moodReducer';
import { drinkCoffee, eatSnack } from '../actions/moodActions';

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

describe('moodReducer', () => {
  it('handles the EAT_SNACK action', () => {
    const state = { snacks: 0 };
    const action = eatSnack();
  
    const newState = reducer(state, action);
  
    expect(newState).toEqual(
      {
        snacks: 1
      }
    );  
  });
});
