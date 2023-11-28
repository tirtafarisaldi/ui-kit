import { render } from '@testing-library/react';

import PopmamaUi from './popmama-ui';

describe('PopmamaUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PopmamaUi />);
    expect(baseElement).toBeTruthy();
  });
});
