import { render } from '@testing-library/react';

import GlobalUi from './global-ui';

describe('GlobalUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GlobalUi />);
    expect(baseElement).toBeTruthy();
  });
});
