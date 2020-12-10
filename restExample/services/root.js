'use strict'

module.exports = async (fastify, opts) => {
  fastify.post('/startInstance', async (request, reply) => {
    const body = { ...request.body }
    const result = await fastify.ZeeBe.createWorkflowInstance('Process_1fpyw9f', body)
    return result
  })

  fastify.put('/update/:id', async (request, reply) => {
    const taskId = request.params.id
    const body = { ...request.body }
    const result = await fastify.ZeeBe.publishMessage(taskId, 'messageValue', body)
    return result
  })
}
