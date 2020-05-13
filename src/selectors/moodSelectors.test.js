import { getFace } from './moodSelector';

describe('mood selectors', () => {
  it('returns angry face if hangry', () => {
    const state = { coffees: 0, naps: 0, snacks: 0 };

    const face = getFace(state);

    expect(face).toEqual('🤬');
  });
});
