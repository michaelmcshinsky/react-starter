import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutAdmin } from '.';

it('renders without crashing', () => {
  const component = renderer.create(<LayoutAdmin />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
