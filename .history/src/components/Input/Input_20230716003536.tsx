import React from 'react'
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string

  register: UseFormRegister<any>
  rules?: RegisterOptions
}
export default function Input({
  type,
  className,
  placeholder,
  autoComplete,
  errorMessage,
  name,
  register,
  rules
}: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
        placeholder={placeholder}
        {...register(name, rules)}
        autoComplete={autoComplete}
      />
      <div className=' mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorMessage}</div>
    </div>
  )
}
