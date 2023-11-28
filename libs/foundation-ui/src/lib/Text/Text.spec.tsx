import { render } from '@testing-library/react';
import React from 'react';
import Text from './Text';

describe('Text', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Text>Lorem Ipsum</Text>);
    expect(baseElement).toBeTruthy();
  });
});
