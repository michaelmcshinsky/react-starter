import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutDefault } from '.';

it('renders without crashing', () => {
  const component = renderer.create(<LayoutDefault />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
