import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Mainapp from './Mainapp';

describe('<Mainapp />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Mainapp />);
    const mainapp = getByTestId('Mainapp');

    expect(mainapp).toBeInTheDocument();
  });
});