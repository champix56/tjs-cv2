import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeViewer from './MemeViewer';

describe('<MemeViewer />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<MemeViewer />);
    const memeViewer = getByTestId('MemeViewer');

    expect(memeViewer).toBeInTheDocument();
  });
});