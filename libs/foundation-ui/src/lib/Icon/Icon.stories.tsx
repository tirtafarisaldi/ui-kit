import {ComponentStory, ComponentMeta} from '@storybook/react';
import Icon from './Icon';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';
import IconArrowDownCircle from '../../../assets/icons/arrow-down-circle.svg'

export default {
  title: 'Foundation/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
 
    <StoriesThemeProvider>
      <Icon {...args} />
    </StoriesThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  icon: IconArrowDownCircle,
  size: 'default',
};