import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Banner from './Banner';

describe('<Banner />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Banner />);
    const banner = getByTestId('Banner');

    expect(banner).toBeInTheDocument();
  });
});