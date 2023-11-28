import { render } from '@testing-library/react';

import Radio from './Radio';
import React from 'react';

describe('Radio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Radio />);
    expect(baseElement).toBeTruthy();
  });
});
