import reducer from './moodReducer';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';

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

describe('moodReducer', () => {
  it('handles the TAKE_NAP action', () => {
    const state = { naps: 0 };
    const action = takeNap();
  
    const newState = reducer(state, action);
  
    expect(newState).toEqual(
      {
        naps: 1
      }
    );  
  });
});

describe('moodReducer', () => {
  it('handles the STUDY action', () => {
    const state = { studies: 0 };
    const action = study();
  
    const newState = reducer(state, action);
  
    expect(newState).toEqual(
      {
        studies: 1
      }
    );  
  });
});
