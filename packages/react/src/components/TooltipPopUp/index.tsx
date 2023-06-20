import * as Tooltip from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent } from './styles'
import { ReactNode } from 'react'

export interface TooltipPopUpProps {
  children: ReactNode
  info: string
}

export function TooltipPopUp({ children, info }: TooltipPopUpProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent>
            {info}
            <TooltipArrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
