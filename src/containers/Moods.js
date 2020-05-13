import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getFace } from '../selectors/moodSelector';
import { useSelector } from 'react-redux';

export default class Moods extends Component {

  render() {
    const face = useSelector(getFace);

    return (
      <>
        <Controls>
          <button onClick={() => this.handleSelection({ type: 'DRINK_COFFEE' })}>coffee - {coffees}</button>
          <button onClick={() => this.handleSelection({ type: 'EAT_SNACK' })}>snacks - {snacks}</button>
          <button onClick={() => this.handleSelection({ type: 'TAKE_NAP' })}>naps - {naps}</button>
          <button onClick={() => this.handleSelection({ type: 'STUDY' })}>studies - {studies}</button>
        </Controls>
        <Face emoji={face} />
      </>
    );
  }
}
