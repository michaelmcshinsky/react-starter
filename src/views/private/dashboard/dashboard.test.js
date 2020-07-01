import React from 'react';
import renderer from 'react-test-renderer';
import { DashboardView } from './dashboard';

it('renders without crashing', () => {
  const component = renderer.create(<DashboardView />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
