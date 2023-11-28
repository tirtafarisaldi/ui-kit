import { render } from '@testing-library/react';

import YummyUi from './yummy-ui';

describe('YummyUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<YummyUi />);
    expect(baseElement).toBeTruthy();
  });
});
