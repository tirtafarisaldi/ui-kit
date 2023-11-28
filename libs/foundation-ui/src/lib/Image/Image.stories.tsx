import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';
import {View} from '../View';
import Img from './Image';

export default {
  title: 'Foundation/Image',
  component: Img,
} as ComponentMeta<typeof Img>;

const Template: ComponentStory<typeof Img> = ({
  children,
  ...args
}) => (
  <StoriesThemeProvider>
    <View height={700} width={700}>
      {React.cloneElement(children as React.ReactElement<unknown>, args)}
    </View>
  </StoriesThemeProvider>
);

export const Image = (Template as ComponentStory<typeof Img>).bind({});
Image.args = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  children: <Img />,
  width: 500,
  height: 287,
  defaultBackground: '#ecefef',
  rounded: true,
  objectFit: 'contain',
  src: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
  picSrc: [
    {
      type: 'image/png',
      media: '(min-width: 700px)',
      srcSet:
        'https://media.geeksforgeeks.org/wp-content/uploads/20190825000042/geeks-221.png',
    },
    {
      type: 'image/png',
      media: '(min-width: 450px)',
      srcSet:
        'https://media.geeksforgeeks.org/wp-content/uploads/20190802021607/geeks14.png',
    },
  ],
};

export const BrokenImage = (Template as ComponentStory<typeof Img>).bind({});
BrokenImage.args = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  children: <Img />,
  width: 500,
  height: 287,
  rounded: true,
  objectFit: 'contain',
  src: '',
};