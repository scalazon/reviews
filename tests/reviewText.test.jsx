import React from 'react';
import ReviewText from '../client/components/ReviewText'
import renderer from 'react-test-renderer';

test('App renders', () => {
  const component = renderer.create(
    <ReviewText />
  )
  let tree= component.toJSON();
  expect(tree).toMatchSnapshot();

})