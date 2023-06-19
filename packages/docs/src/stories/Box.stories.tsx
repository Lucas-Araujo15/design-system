import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@2023-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  tags: ['autodocs'],
  component: Box,
  args: {
    children: <Text>Box example</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
