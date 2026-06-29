import { FastifyError, FastifyReply, FastifyRequest } from "fastify";

export const errorHandler = (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
        const statusCode = error.statusCode || 500;
        const errorResponse = {
             success: false,
             message: error.message || 'Internal server error',
             code: error.code || 'INTERNAL_ERROR',
             data: null
        }
        reply.status(statusCode).send(errorResponse);
    }