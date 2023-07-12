import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

export default function Button(props: ButtonProps) {
  const { isLoading, className, disabled, children, ...rest } = props
  const newClassName = disabled ? className + 'cursor-not-allowed' : className
  return (
    <button className={newClassName} disabled={disabled} {...rest}>
      <span>{children}</span>
    </button>
  )
}
