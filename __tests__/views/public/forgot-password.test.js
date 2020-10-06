import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ForgotPasswordView } from '../../../src/views/public';

it('renders without crashing', () => {
  const component = renderer.create(
    <Router>
      <ForgotPasswordView />
    </Router>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
