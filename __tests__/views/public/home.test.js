import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { HomeView } from '../../../src/views/public';

it('renders without crashing', () => {
  const component = renderer.create(
    <Router>
      <HomeView />
    </Router>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
