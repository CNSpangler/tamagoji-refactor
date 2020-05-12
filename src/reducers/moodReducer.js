import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY } from '../actions/moodActions';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 }
      ;
    case EAT_SNACK:
      return { ...state, coffees: state.snacks + 1 };
    case TAKE_NAP:
      return { ...state, coffees: state.naps + 1 };
    case STUDY:
      return { ...state, coffees: state.studies + 1 };
    default:
      console.log(`unhandled type: ${action.type}`);
      break;
  }
}
