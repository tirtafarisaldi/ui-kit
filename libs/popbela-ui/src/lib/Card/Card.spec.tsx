import { render } from '@testing-library/react';

import Card from './Card';
import React from 'react';
import { mockData } from './mockData';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card {...mockData} />);
    expect(baseElement).toBeTruthy();
  });
});
