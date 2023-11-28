import { render } from '@testing-library/react';
import React from 'react';
import Badge from './Badge';
describe('Badge', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Badge variant="filled">
        <span>Popbela</span>
      </Badge>
    );
    expect(baseElement).toBeTruthy();
  });
});
