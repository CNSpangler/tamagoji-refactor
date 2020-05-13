import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useDispatch } from 'react-redux';
import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY } from '../actions/moodActions';

const Moods = () => {
  const dispatch = useDispatch();

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
