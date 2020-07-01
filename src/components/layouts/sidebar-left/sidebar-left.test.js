import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutSidebarLeft } from '.';

it('renders without crashing', () => {
  const component = renderer.create(<LayoutSidebarLeft />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
