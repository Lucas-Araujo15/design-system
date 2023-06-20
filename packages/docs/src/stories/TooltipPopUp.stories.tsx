import type { StoryObj, Meta } from '@storybook/react'
import { Button, TooltipPopUp, TooltipPopUpProps } from '@2023-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  tags: ['autodocs'],
  component: TooltipPopUp,
  args: {
    children: <Button>Send</Button>,
    info: 'Submit all changes',
  },
} as Meta<TooltipPopUpProps>

export const Primary: StoryObj<TooltipPopUpProps> = {}
