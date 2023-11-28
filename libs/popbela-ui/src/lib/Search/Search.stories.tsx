import type { ComponentStory, Meta } from '@storybook/react';
import Search from './Search';
import { useState } from 'react';
import { View } from 'foundation-ui';
import StoriesThemeProvider from './../Theme/StoriesThemeProvider';

const Story: Meta<typeof Search> = {
  component: Search,
  title: 'Popbela/Search',
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
const Template: ComponentStory<typeof Search> = (args) => (
  <StoriesThemeProvider>
    <Search {...args} />
  </StoriesThemeProvider>
);

const SearchBar: ComponentStory<typeof Search> = (args) => {
  const [value1, setValue1] = useState('tes');
  const [value2, setValue2] = useState('tes2');
  const [value3, setValue3] = useState('tes3');

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    setValue1((e.target as HTMLInputElement).value);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setValue2((e.target as HTMLInputElement).value);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      search: { value: string };
    };

    setValue3(target.search.value);
  };

  return (
    <View>
      <h1>onChange: {value1}</h1>
      <Search defaultValue={value1} onChange={handleChange} {...args} />
      <h1>onBlur: {value2}</h1>
      <Search defaultValue={value2} onBlur={handleBlur} {...args} />
      <h1>onSubmit (press enter or click button): {value3}</h1>
      <Search defaultValue={value3} onSubmit={handleSubmit} {...args} />
    </View>
  );
};

export default Story;
export const Default = Template.bind({});
export const Primary = SearchBar.bind({});
Default.args = {
  width: '100%',
  placeholder: 'Masukkan kata kunci...',
  padding: '10px',
  height: '47px',
  borderRadius: 1,
  backgroundBtn: 'red',
};
Primary.args = {
  width: '100%',
  placeholder: 'Masukkan kata kunci...',
  padding: '10px',
  height: '37px',
  borderRadius: 1,
  backgroundBtn: 'red',
};
