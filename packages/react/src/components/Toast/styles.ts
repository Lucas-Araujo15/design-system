import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'
import { keyframes } from '@stitches/react'

export const ToastProvider = styled(Toast.Provider, {})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 25px))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

export const ToastRoot = styled(Toast.Root, {
  boxSizing: 'border-box',
  background: '$gray800',
  border: '2px solid $gray600',
  width: '22.5rem',

  borderRadius: '$sm',
  lineHeight: '$base',
  padding: '$3 $5',

  display: 'flex',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  button: {
    all: 'unset',
    display: 'flex',
    cursor: 'pointer',

    svg: {
      color: '$gray200',
    },
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  color: '$white',
  fontSize: '$xl',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  color: '$gray200',
  fontSize: '$sm',
  margin: 0,
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  maxWidth: '100vw',
  zIndex: 2147483647,
  outline: 'none',
  width: 390,
})
