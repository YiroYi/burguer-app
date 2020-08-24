import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurguerBuilder } from './BurguerBuilder';
import BuildControls from '../../components/BuildControls/BuildControls';

configure({adapter: new Adapter()});

let wrapper;

describe('<BurguerBuilder/>', () => {
  beforeEach(() => {
    wrapper = shallow(<BurguerBuilder onInitIngredients={()=>{}} />);
  });

  it('should render <BuildControls /> when receiving ingredients', () => {
    wrapper.setProps({ings: {salad: 0}});
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
