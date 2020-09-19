import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Search from '../components/Search';
import Error from '../components/Error';
import LoadingSpinner from '../components/LoadingSpinner';

// configure enzyme and connect to app react version
configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test(`Should always render one <Search /> component`, () => {
    expect(wrapper.find(Search)).toHaveLength(1);
  });

  describe('<App /> with default state', () => {
    test(`Should NOT render a <LoadingSpinner /> component, if default state`, () => {
      expect(wrapper.find(LoadingSpinner)).toHaveLength(0);
    });

    test(`Should NOT render an <Error /> component, if default state`, () => {
      expect(wrapper.find(Error)).toHaveLength(0);
    });
  });
});
