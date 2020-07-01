import React from 'react';
import renderer from 'react-test-renderer';
import { ForgotPasswordView } from './'';

it('renders without crashing', () => {
  const component = renderer.create(<ForgotPasswordView />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
