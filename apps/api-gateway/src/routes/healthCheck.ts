import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const healthCheck = async (app: FastifyInstance) => {
    app.get("/health", async(req: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send({
            success: true,
            message: "API Gateway is healthy",
            data: {
                 service: 'api-gateway',
                 timestamp: new Date().toISOString(),
                 uptime: process.uptime()
            }
        }) 
    })
}