import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './core/Home';
import SendRequest from './core/SendRequest';

Enzyme.configure({ adapter: new Adapter() });

describe('Home component ', () => {
  test('renders', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.exists()).toBe(true);
  });
});

describe('SendRequest component ', () => {
  test('renders', () => {
    const wrapper = shallow(<SendRequest />);

    expect(wrapper.exists()).toBe(true);
  });
});