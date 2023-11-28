import { render } from '@testing-library/react';

import Nav from './Nav';
import React from 'react';
import mockData from './mockData';

describe('Navbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Nav {...mockData} />);
    expect(baseElement).toBeTruthy();
  });
});
