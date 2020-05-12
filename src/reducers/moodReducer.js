import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY } from "../actions/moodActions";

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return [...state, action.payload];
    case EAT_SNACK:
      return [...state, action.payload];
    case TAKE_NAP:
      return [...state, action.payload];
    case STUDY:
      return [...state, action.payload];
    default:
      return `unhandled type: ${action.type}`;
  }
}
