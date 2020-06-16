import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeContentTextEditor from './MemeContentTextEditor';

describe('<MemeContentTextEditor />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<MemeContentTextEditor />);
    const memeContentTextEditor = getByTestId('MemeContentTextEditor');

    expect(memeContentTextEditor).toBeInTheDocument();
  });
});