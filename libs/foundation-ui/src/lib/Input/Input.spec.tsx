import { render } from '@testing-library/react';

import Input from './Input';
import React from 'react';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toBeTruthy();
  });
});
