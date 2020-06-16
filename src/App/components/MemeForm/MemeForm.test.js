import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeForm from './MemeForm';

describe('<MemeForm />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<MemeForm />);
    const memeForm = getByTestId('MemeForm');

    expect(memeForm).toBeInTheDocument();
  });
});