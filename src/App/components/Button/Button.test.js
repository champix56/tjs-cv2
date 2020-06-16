import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('<Button />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId('Button');

    expect(button).toBeInTheDocument();
  });
});