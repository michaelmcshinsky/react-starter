import React from 'react';
import renderer from 'react-test-renderer';
import { SetPasswordView } from './';

it('renders without crashing', () => {
  const component = renderer.create(<SetPasswordView />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
