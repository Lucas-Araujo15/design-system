import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@2023-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  tags: ['autodocs'],
  component: Toast,
  args: {},
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)
      return (
        <>
          <Button onClick={() => setOpen(!open)}>Agendar</Button>
          {Story({
            args: {
              isOpen: open,
              title: 'Agendamento realizado',
              description: 'Descrição',
            },
          })}
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
