import { render } from '@testing-library/react';

import React from 'react';
import Modal from './Modal';

describe('Modal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Modal
        isOpen={false}
        onClose={function (): void | undefined {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
