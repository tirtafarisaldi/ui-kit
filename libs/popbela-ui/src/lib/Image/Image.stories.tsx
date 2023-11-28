import type { ComponentStory, Meta } from '@storybook/react';
import { Image } from './Image';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';
import { View } from 'foundation-ui';
import {ArticleImage, DefaultImage} from './mockData'
const Story: Meta<typeof Image> = {
  component: Image,
  title: 'Popbela/Image',
};

const ArticleTemplate: ComponentStory<typeof Image> = (args) => (
  <StoriesThemeProvider>
    Example for article image (cover & article)
    <View height={700} width={700} position='relative'>
      <Image {...args} />
    </View>
  </StoriesThemeProvider>
);
const DefaultTemplate: ComponentStory<typeof Image> = (args) => (
  <StoriesThemeProvider>
    Example for default image
    <View height={700} width={700} position='relative'>
      <Image {...args} />
    </View>
  </StoriesThemeProvider>
);

export default Story;

export const Default = DefaultTemplate.bind({});
export const Article = ArticleTemplate.bind({});
Article.args = {...ArticleImage}
Default.args = {...DefaultImage}