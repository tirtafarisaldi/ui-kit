import { render } from '@testing-library/react';

import Breadcrumbs from './Breadcrumbs';
import React from 'react';
import mockData from './mockData';

describe('Breadcrumbs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Breadcrumbs {...mockData} />);
    expect(baseElement).toBeTruthy();
  });
});
