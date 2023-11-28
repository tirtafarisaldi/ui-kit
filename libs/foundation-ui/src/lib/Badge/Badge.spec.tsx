import React from 'react';
import { render } from '@testing-library/react';

import Badge from './Badge';

describe('Badge', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Badge variant='filled'>Trending Topics</Badge>);
    expect(baseElement).toBeTruthy();
  });
  it('should render children correctly', () => {
    const { getByText } = render(<Badge variant='filled'><span>Trending Topics</span></Badge>);
    expect(getByText(/Trending Topics/)).toBeTruthy();
  });
});
