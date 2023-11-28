import { render } from '@testing-library/react';
import Link from './Link';
import React from 'react';

describe('Link', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Link href="/">
        <label>Click Me</label>
      </Link>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should showing children correctly', () => {
    const { getByText } = render(
      <Link href="/">
        <label data-testid="label">Click Me</label>
      </Link>
    );
    expect(getByText(/Click Me/i));
  });
});
