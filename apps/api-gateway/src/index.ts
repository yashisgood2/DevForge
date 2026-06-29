import fastify, { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import { errorHandler } from "./middleware/errorHandler";
import { healthCheck } from "./routes/healthCheck";
import { config } from "./config/env";

const app = fastify({
    logger: {
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
            }
        }
    }
})

const BootStrapper = async () => {
    app.register(cors, {
        origin: true
    });
    app.setErrorHandler(errorHandler);
    app.register(healthCheck);
    app.setNotFoundHandler((request, reply) => {
        reply.status(404).send({
            success: false,
            message: 'Route not found', 
    });
    });

    app.listen({
        port: config.port || 3000,
        host: config.host || 'localhost',
    }, () => {
        console.log(`API Gateway is running at http://${config.host || 'localhost'}:${config.port || 3000}`);
    })
}

BootStrapper().catch((error: FastifyError) => {
    console.error('Error starting API Gateway:', error);
});
