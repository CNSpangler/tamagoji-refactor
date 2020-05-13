import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useDispatch, useSelector } from 'react-redux';
import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY } from '../actions/moodActions';
import { getCoffees, getSnacks, getNaps, getStudies } from '../selectors/moodSelector';

const Moods = () => {
  const dispatch = useDispatch();
  const coffees = useSelector(getCoffees);
  const snacks = useSelector(getSnacks);
  const naps = useSelector(getNaps);
  const studies = useSelector(getStudies);

  return (
    <>
      <Controls>
        <button onClick={() => dispatch({ type: DRINK_COFFEE })}>coffee - {coffees}</button>
        <button onClick={() => dispatch({ type: EAT_SNACK })}>snacks - {snacks}</button>
        <button onClick={() => dispatch({ type: TAKE_NAP })}>naps - {naps}</button>
        <button onClick={() => dispatch({ type: STUDY })}>studies - {studies}</button>
      </Controls>
      <Face />
    </>
  );
};

export default Moods;
