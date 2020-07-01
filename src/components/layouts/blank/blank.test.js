import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutBlank } from '.';

it('renders without crashing', () => {
  const component = renderer.create(<LayoutBlank />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
