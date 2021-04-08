'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const replyFrom = require('fastify-reply-from')
const proxy = require('fastify-http-proxy')
const sensible = require('fastify-sensible')

module.exports = async function (fastify, opts) {
      
  fastify.register(sensible)
  fastify.register (proxy, {
    upstream: 'https://news.ycombinator.com',
    async preHandler(request, reply) {
      if (request.query.token !== 'abc') {
        throw fastify.httpErrors.unauthorized()
      }
    }
  })

  
  // ABAIXO IMPLMENTA O PROXY DE ROTAS

  //fastify.register (replyFrom)


  // fastify.register(AutoLoad, {
  //   dir: path.join(__dirname, 'plugins'),
  //   options: Object.assign({}, opts)
  // })

  
  // fastify.register(AutoLoad, {
  //   dir: path.join(__dirname, 'routes'),
  //   options: Object.assign({}, opts)
  // })
}
