import { render } from '@testing-library/react';

import FortuneUi from './fortune-ui';

describe('FortuneUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FortuneUi />);
    expect(baseElement).toBeTruthy();
  });
});
