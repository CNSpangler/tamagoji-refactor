import { drinkCoffee, DRINK_COFFEE } from '../actions/moodActions.js';

describe('mood selectors', () => {
  it('gets', () => {
    const state = { coffees: 0 };

    const coffees = drinkCoffee(state);

    expect(coffees).toEqual({ type: DRINK_COFFEE });
  });
});
