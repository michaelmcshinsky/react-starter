import React from 'react';
import renderer from 'react-test-renderer';
import { RegisterView } from './';

it('renders without crashing', () => {
  const component = renderer.create(<RegisterView />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
