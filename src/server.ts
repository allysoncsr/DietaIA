import Fastify from "fastify";
import cors from '@fastify/cors'
import dotenv from 'dotenv'
import { routes } from "./routes"; // importando o routes e suas configurações 

// Fastify é a biblioteca que vamos utilizar para ter roteamento
// abaixo inicializo o Fastify e o dotenv

const app = Fastify({ logger: true })
dotenv.config();

// faço um tratamento de erro, mostrando erro 400 e a mensagem erro.message

app.setErrorHandler((error, request, reply) => {
reply.code(400).send({message: error.message})
})


// abaixo vamos está inicializando o servidor, cirando então uma constante e suas configurações como porta e as rotas (routes)

const start = async () => {
    app.register(cors);     // registrando o cors para deixar liberado para qualquer um de qualquer IP fazer requisição desta api
    app.register(routes)    // registrando as rotas  também 

    try{
        await app.listen({port: 3333, host: "0.0.0.0"})
        console.log('servidor rodando no http://localhost:3333')
    }catch(err){
        console.log(err);
    }

}

start();