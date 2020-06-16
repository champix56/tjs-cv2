import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeTextsList from './MemeTextsList';

describe('<MemeTextsList />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<MemeTextsList />);
    const memeTextsList = getByTestId('MemeTextsList');

    expect(memeTextsList).toBeInTheDocument();
  });
});