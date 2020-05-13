import React from 'react';
import { shallow } from 'enzyme';
import Face from './Face';
import { Provider } from 'react-redux';

describe('Face component', () => {
  it('renders Face', () => {
    const wrapper = shallow(
      <Provider>
        <Face emoji="😀" />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
  
