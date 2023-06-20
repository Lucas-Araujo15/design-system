import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  borderRadius: 5,
  padding: '$3 $4',
  fontFamily: '$info',
  color: '$gray100',
  fontSize: '$sm',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
