import type { Meta } from '@storybook/react';
import Badge from './Badge'
import Text from '../Text/Text';
const Story: Meta<typeof Badge> = {
  component: Badge,
  title: 'Foundation/Badge', 
};
export default Story;

export const BadgeText = {
  args: {
    children: (<Text as='h1' fontSize='md' fontColor='black'>Trending Topics</Text>),
    variant: 'outlined',
    borderWidth: '5px',
    color: 'black',
  },
}