import { ReactNode } from 'react'
import {
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps {
  title: string
  description: string
  isOpen: boolean
  children: ReactNode
}

export function Toast({ title, description, isOpen = true }: ToastProps) {
  return (
    <ToastProvider swipeDirection="right">
      <ToastRoot open={isOpen}>
        <div>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription asChild>
            <p>{description}</p>
          </ToastDescription>
        </div>
        <button>
          <X size={20} weight="regular" />
        </button>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}
