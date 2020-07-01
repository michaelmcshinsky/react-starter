import React from 'react';
import renderer from 'react-test-renderer';
import { LoginView } from './';

it('renders without crashing', () => {
  const component = renderer.create(<LoginView />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
