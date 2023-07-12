import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ className }: ButtonProps) {
  return <button className={className}>Button</button>
}
