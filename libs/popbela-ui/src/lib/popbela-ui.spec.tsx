import { render } from '@testing-library/react';

import PopbelaUi from './popbela-ui';

describe('PopbelaUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PopbelaUi />);
    expect(baseElement).toBeTruthy();
  });
});
