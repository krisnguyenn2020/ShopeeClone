import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

export default function Button({ className }: ButtonProps) {
  const { isLoading, className, disabled, children, ...rest } = props
  return <button className={className}>Button</button>
}
