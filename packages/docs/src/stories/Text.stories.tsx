import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  tags: ['autodocs'],
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quisquam? Eum vitae illum nulla quibusdam voluptas, facere impedit quam error architecto numquam ab esse quos unde asperiores beatae fugiat. Ut?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
