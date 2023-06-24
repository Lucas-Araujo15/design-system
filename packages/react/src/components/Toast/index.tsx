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
  setOpen: (isOpen: boolean) => void
}

export function Toast({ title, description, isOpen, setOpen }: ToastProps) {
  return (
    <ToastProvider swipeDirection="right">
      <ToastRoot open={isOpen}>
        <div>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription asChild>
            <p>{description}</p>
          </ToastDescription>
        </div>
        <button onClick={() => setOpen(false)}>
          <X size={20} weight="regular" />
        </button>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}
