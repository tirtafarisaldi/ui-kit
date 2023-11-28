import { render } from '@testing-library/react';

import Navbar from './Navbar';
import React from 'react';
import {defaultNavbar} from './mockData';

describe('Navbar Popbela', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navbar {...defaultNavbar} />);
    expect(baseElement).toBeTruthy();
  });
});
