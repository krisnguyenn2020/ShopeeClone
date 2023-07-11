import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Schema, schema } from '../../utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'

import Input from 'src/components/Input'
import { registerAccount } from 'src/apis/auth.api'
import { useMutation } from '@tanstack/react-query'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
// interface FormData {
//   email: string
//   password: string
//   confirm_password: string
// }
type FormData = Schema
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    setError
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        // console.log(data)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                type: 'Server',
                message: formError[key as keyof Omit<FormData, 'confirm_password'>]
              })
            })
          }
          // if (formError?.email) {
          //   setError('email', {
          //     type: 'Server',
          //     message: formError.email
          //   })
          // }
          // if (formError?.password) {
          //   setError('password', {
          //     type: 'Server',
          //     message: formError.password
          //   })
          // }
        }
      }
    })
  })
  // console.log(errors)
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-20 lg:grid-cols-5 lg:py-12 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-4xl'>Register</div>
              <Input
                name='email'
                register={register}
                type='email'
                placeholder='Email'
                errorMessage={errors.email?.message}
                className='mt-8'
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Password'
              />

              <Input
                name='confirm_password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.confirm_password?.message}
                placeholder='Password'
              />
              <div className='mt-2'>
                <button
                  type='submit'
                  className='mt-2 w-full bg-red-500 px-2 py-4 text-center text-sm uppercase text-white'
                >
                  Register
                </button>
              </div>
              <div className='mt-2 mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Have an account?</span>
                <Link className=' ml-2 text-red-400' to='/login'>
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
