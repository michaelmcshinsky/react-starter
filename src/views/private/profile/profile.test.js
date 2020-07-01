import React from 'react';
import renderer from 'react-test-renderer';
import { ProfileView } from './profile';

it('renders without crashing', () => {
  const component = renderer.create(<ProfileView />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
