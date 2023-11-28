import { render } from '@testing-library/react';
import Skeleton from './Skeleton';
import React from 'react';

describe('Skeleton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Skeleton />
    );
    expect(baseElement).toBeTruthy();
  });
});
