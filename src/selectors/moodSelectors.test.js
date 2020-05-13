import { getFace, getCoffees, getSnacks, getNaps, getStudies } from './moodSelector';

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

  it('returns snacks', () => {
    const state = { snacks: 15 };
    const snacks = getSnacks(state);
    expect(snacks).toEqual(15);
  });
  
  it('returns naps', () => {
    const state = { naps: 15 };
    const naps = getNaps(state);
    expect(naps).toEqual(15);
  });

  it('returns studies', () => {
    const state = { studies: 15 };
    const studies = getStudies(state);
    expect(studies).toEqual(15);
  });
});
