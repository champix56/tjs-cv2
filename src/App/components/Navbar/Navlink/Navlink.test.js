import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navlink from './Navlink';

describe('<Navlink />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Navlink />);
    const navlink = getByTestId('Navlink');

    expect(navlink).toBeInTheDocument();
  });
});