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

      function handleSetOpen(isOpen: boolean) {
        setOpen(isOpen)
      }

      return (
        <>
          <Button onClick={() => setOpen(true)}>Agendar</Button>
          {Story({
            args: {
              isOpen: open,
              title: 'Agendamento realizado',
              description: new Intl.DateTimeFormat('pt-BR', {
                dateStyle: 'full',
                timeStyle: 'short',
              }).format(new Date()),
              setOpen: handleSetOpen,
            },
          })}
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
