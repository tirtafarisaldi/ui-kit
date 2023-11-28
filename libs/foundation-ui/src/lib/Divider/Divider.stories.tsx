import type { Meta } from '@storybook/react';
import Divider from './Divider'
const Story: Meta<typeof Divider> = {
  component: Divider,
  title: 'Foundation/Divider', 
};
export default Story;

export const Default = {
  args: {
    children: 'Text Example',
  },
}