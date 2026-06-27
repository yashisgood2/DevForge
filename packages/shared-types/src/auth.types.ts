export interface JwtPayload {
  sub: string        // userId
  email: string
  iat?: number
  exp?: number
}

export interface UserPayload {
  id: string
  email: string
}

export interface TokenPair {
  accessToken: string
  refreshToken: string
}

export interface RegisterRequest {
  email: string
  password: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse extends TokenPair {
  user: UserPayload
}