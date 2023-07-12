import React from 'react'

interface Props {
  className?: string
}

export default function Button({ className }: Props) {
  return <button className={className}>Button</button>
}
