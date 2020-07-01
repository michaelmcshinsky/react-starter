import React from 'react';
import renderer from 'react-test-renderer';
import { HomeView } from './';

it('renders without crashing', () => {
  const component = renderer.create(<HomeView />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
