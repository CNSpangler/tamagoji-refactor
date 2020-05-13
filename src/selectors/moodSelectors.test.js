import { getFace, getCoffees } from './moodSelector';

describe('mood selectors', () => {
  it('returns angry face if hangry', () => {
    const state = { coffees: 0, naps: 0, snacks: 0 };

    const face = getFace(state);

    expect(face).toEqual('🤬');
  });
  
  it('returns barf if overstimulated', () => {
    const state = { coffees: 6, snacks: 0 };

    const face = getFace(state);

    expect(face).toEqual('🤮');
  });

  it('returns sleeping face if tired', () => {
    const state = { coffees: 0, naps: 0 };

    const face = getFace(state);

    expect(face).toEqual('😴');
  });

  it('returns coffees', () => {
    const state = { coffees: 15 };
    const coffees = getCoffees(state);
    expect(coffees).toEqual(15);
  });
});
