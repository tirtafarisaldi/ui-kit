import { render } from '@testing-library/react';

import Button from './Button';
import React from 'react';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Click Me</Button>);
    expect(baseElement).toBeTruthy();
  });
});
