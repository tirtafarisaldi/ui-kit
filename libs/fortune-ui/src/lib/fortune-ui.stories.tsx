import type { Meta } from '@storybook/react';
import {  FortuneUi  }  from './fortune-ui';





const Story: Meta<typeof FortuneUi> = {
  component: FortuneUi,
  title: 'FortuneUi', 
};
export default Story;


export const Primary = {
  args: {
  },
};