import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@2023-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  tags: ['autodocs'],
  component: Avatar,
  args: {
    src: 'https://github.com/lucas-araujo15.png',
    alt: 'Lucas Araujo',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
