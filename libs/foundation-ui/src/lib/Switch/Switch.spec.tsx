import { render } from '@testing-library/react';

import Switch from './Switch';
import React from 'react';

describe('Switch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Switch />);
    expect(baseElement).toBeTruthy();
  });
});
