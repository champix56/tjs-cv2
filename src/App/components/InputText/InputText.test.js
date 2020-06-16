import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputText from './InputText';

describe('<InputText />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<InputText />);
    const inputText = getByTestId('InputText');

    expect(inputText).toBeInTheDocument();
  });
});