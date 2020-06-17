import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemesViewer from './MemesViewer';

describe('<MemesViewer />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<MemesViewer />);
    const memesViewer = getByTestId('MemesViewer');

    expect(memesViewer).toBeInTheDocument();
  });
});