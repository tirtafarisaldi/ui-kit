import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import View from './View';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';

import { Direction } from './View.types';

export default {
  title: 'Foundation/View',
  component: View,
} as ComponentMeta<typeof View>;

const LayoutStory = () => {
  const [direction, setDirection] = React.useState<Direction>('row');
  return (
    <View flex={1} flexDirection="column">
      <h3>Layout 100%</h3>
      <View flex={1} margin={4} padding={8} backgroundColor="gray40">
        100%
      </View>

      <h3>Layout Split to 2</h3>
      <View filled flex={1} marginBottom={10}>
        <View flex={1} marginRight={4} padding={8} backgroundColor="gray40">
          50%
        </View>
        <View flex={1} padding={8} backgroundColor="gray40">
          50%
        </View>
      </View>
      <h3>Layout Split to 3</h3>
      <View filled flex={1}>
        <View flex={1} marginRight={4} padding={8} backgroundColor="gray40">
          33%
        </View>
        <View flex={1} marginRight={4} padding={8} backgroundColor="gray40">
          33%
        </View>
        <View flex={1} padding={8} backgroundColor="gray40">
          33%
        </View>
      </View>
      <br />
      <View flex={1} marginTop={4} filled>
        <View flex={1} marginRight={4} padding={8} backgroundColor="gray40">
          25%
        </View>
        <View flex={2} marginRight={4} padding={8} backgroundColor="gray40">
          50%
        </View>
        <View flex={1} padding={8} backgroundColor="gray40">
          25%
        </View>
      </View>
      <br />
      <h3>Layout Split to 4</h3>
      <View flex={1} filled>
        <View flex={1} marginRight={4} padding={8} backgroundColor="gray40">
          25%
        </View>
        <View flex={1} marginRight={4} padding={8} backgroundColor="gray40">
          25%
        </View>
        <View flex={1} padding={8} marginRight={4} backgroundColor="gray40">
          25%
        </View>
        <View flex={1} padding={8} backgroundColor="gray40">
          25%
        </View>
      </View>
      <br />
      <h2>Flex Direction</h2>
      <select
        id="flex-direction"
        value={direction}
        onChange={(e) => {
          setDirection(e.target.value as Direction);
        }}
      >
        <option value="row">Row</option>
        <option value="column">Column</option>
        <option value="row-reverse">Row Reverse</option>
        <option value="column-reverse">Column Reverse</option>
      </select>

      <View marginTop={8} flex={1} filled flexDirection={direction}>
        <View flex={1} margin={4} padding={8} backgroundColor="blue48">
          1
        </View>
        <View flex={1} margin={4} padding={8} backgroundColor="gray40">
          2
        </View>
        <View flex={1} padding={8} margin={4} backgroundColor="gray40">
          3
        </View>
        <View flex={1} margin={4} padding={8} backgroundColor="gray40">
          4
        </View>
      </View>
      <br />
      <h2>Flex Gap</h2>
      <View flex={1} flexGap={10} flexWrap="wrap">
        {[...Array(45).keys()].map((i) => (
          <View key={i} width={100} height={100} backgroundColor="gray40" />
        ))}
      </View>
    </View>
  );
};

const Template: ComponentStory<typeof View> = (args) => (
  <StoriesThemeProvider>
    <View {...args} />
  </StoriesThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: <LayoutStory />,
};
