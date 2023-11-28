import React from 'react';
import { render } from '@testing-library/react';
import Tab from './Tab';
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Tab', () => {
  it('should render tab Tabsuccessfully', () => {
    const { baseElement } = render(
      <Tab
        isActive={true}
        contentProps={{
          position: 'absolute',
          left: 0,
        }}
        id="tab-1"
        navProps={{
          activeColor: 'red70',
          hoverColor: 'red',
          title: {
            children: 'Tab 1',
          },
        }}
      >
        content 1
      </Tab>
    );
    expect(baseElement).toBeTruthy();
  });
});
