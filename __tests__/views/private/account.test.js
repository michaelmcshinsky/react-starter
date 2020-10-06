import React from 'react';
import renderer from 'react-test-renderer';
import { AccountView } from '../../../src/views/private';

it('renders without crashing', () => {
  const component = renderer.create(<AccountView />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
