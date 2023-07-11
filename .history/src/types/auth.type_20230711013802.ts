import { User } from './user.type'
import { SuccessResponse } from './utils.type'

export type AuthResponse = ResponseApi<{
  access_token: string
  expires: string
  user: User
}>
