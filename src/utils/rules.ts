import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Email is invalid'
    },
    maxLength: {
      value: 160,
      message: 'Email should be 5-160 characters'
    },
    minLength: {
      value: 5,
      message: 'Email should be 5-160 characters'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password is required'
    },
    maxLength: {
      value: 160,
      message: 'Password should be 5-160 characters'
    },
    minLength: {
      value: 5,
      message: 'Password should be 5-160 characters'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Confirm password is required'
    },
    maxLength: {
      value: 160,
      message: 'Confirm password should be 5-160 characters'
    },
    minLength: {
      value: 5,
      message: 'Confirm Password should be 5-160 characters'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Confirm password does not match'
        : undefined
  }
})

export const schema = yup.object({
  email: yup
    .string()
    .email('Email is invalid')
    .required('Email is required')
    .min(5, 'Email should be 5-160 characters')
    .max(160, 'Email should be 5-160 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password should be 5-160 characters')
    .max(160, 'Password should be 5-160 characters'),
  confirm_password: yup
    .string()
    .required('Confirm password is required')
    .min(5, 'Confirm password should be 5-160 characters')
    .max(160, 'Confirm password should be 5-160 characters')
    .oneOf([yup.ref('password'), ''], 'Confirm password does not match')
})

export type Schema = yup.InferType<typeof schema>
