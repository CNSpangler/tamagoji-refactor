import { drinkCoffee, eatSnack, takeNap, study, DRINK_COFFEE, EAT_SNACK } from './moodActions';

describe('mood actions', () => {
  it('creates a drink coffee action', () => {
    const action = drinkCoffee();

    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });

  it('creates an eat snack action', () => {
    const action = eatSnack();

    expect(action).toEqual({
      type: EAT_SNACK
    });
  });
});
