import React from 'react';
import { Story, Meta } from '@storybook/react';
import JSTextField  from './JSTextField';
import { JSTextFieldProps } from "./JSTextField.types"

export default {
  title: 'JS-MUI/JSTextField',
  component: JSTextField,
  argTypes: {
  },
} as Meta<typeof JSTextField>;

const Template: Story<JSTextFieldProps> = (args) => <JSTextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'text',
  label: 'Title Field',
};

export const Error = Template.bind({});
Error.args = {
  type: 'text',
  label: 'Title Field',
  error: 'Error message'
};

export const HelperText = Template.bind({});
HelperText.args = {
  type: 'text',
  label: 'Title Field',
  helperText: 'Help message'
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'text',
  label: 'Title Field',
  disabled: true
};

export const StartAdornment = Template.bind({});
StartAdornment.args = {
  type: 'text',
  label: 'Title Field',
  startAdornment: '$'
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  type: 'text',
  label: 'Title Field',
  placeholder: 'Placeholder message'
};