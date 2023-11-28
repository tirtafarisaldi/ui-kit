import { render } from '@testing-library/react';

import Author from './Author';
import React from 'react';
import { mockData } from './mockData';

describe('Author', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Author {...mockData} />);
    expect(baseElement).toBeTruthy();
  });
});
