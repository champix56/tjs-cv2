import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageFlowLayout from './ImageFlowLayout';

describe('<ImageFlowLayout />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<ImageFlowLayout />);
    const imageFlowLayout = getByTestId('ImageFlowLayout');

    expect(imageFlowLayout).toBeInTheDocument();
  });
});