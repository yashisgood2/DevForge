export interface ApiResponse<T = null> {
  success: boolean
  message: string
  data: T | null
  code?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
}