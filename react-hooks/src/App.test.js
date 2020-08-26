import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './core/Home';
import SavePost from './core/SavePost';
import Refs from './core/Refs';

Enzyme.configure({ adapter: new Adapter() });

describe('Search Posts component ', () => {
  test('renders', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.exists()).toBe(true);
  });
});

describe('Save Post component ', () => {
  test('renders', () => {
    const wrapper = shallow(<SavePost />);

    expect(wrapper.exists()).toBe(true);
  });
});

describe('Refs component ', () => {
  test('renders', () => {
    const wrapper = shallow(<Refs />);

    expect(wrapper.exists()).toBe(true);
  });
});