// dentro da rotas (routes), foi importado o que seria usado da biblioteca fastify

import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify'

// abaixo um export 

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
        console.log("ROTA CHAMADA!!!!")

        reply.send({ok: true})
    })
}