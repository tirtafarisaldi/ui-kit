import type { Meta } from '@storybook/react';
import {  YummyUi  }  from './yummy-ui';





const Story: Meta<typeof YummyUi> = {
  component: YummyUi,
  title: 'YummyUi', 
};
export default Story;


export const Primary = {
  args: {
  },
};