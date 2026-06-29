import dotenv from 'dotenv'
dotenv.config()

export const config = {
  port: Number(process.env.PORT) || 3000,
  host: process.env.HOST || 'localhost',
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'dev-secret',
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  services: {
    auth: process.env.AUTH_SERVICE_URL || 'http://localhost:5001',
    workspace: process.env.WORKSPACE_SERVICE_URL || 'http://localhost:4001',
    project: process.env.PROJECT_SERVICE_URL || 'http://localhost:4002',
  }
}