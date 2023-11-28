import { render } from '@testing-library/react';
import { Image } from './Image';
import React from 'react';
import { ArticleImage, DefaultImage } from './mockData';

describe('Image', () => {
  it('should render default image successfully', () => {
    const { baseElement } = render(<Image {...DefaultImage} />);
    expect(baseElement).toBeTruthy();
  });
  it('should render article image successfully', () => {
    const { baseElement } = render(<Image {...ArticleImage} />);
    expect(baseElement).toBeTruthy();
  });
});
