'use strict'

const fp = require('fastify-plugin')
const ZB = require('zeebe-node')
const uuid = require('uuid')

module.exports = fp(async (fastify, opts) => {

  class ZeeBe {
    constructor () {
      this.instance = new ZB.ZBClient('zeebe:26500')
    }

    async createWorkflowInstance(instanceName, data) {
      const result = await this.instance.createWorkflowInstance(instanceName, data)
      return result
    }

    async publishMessage(correlationKey, messageName, variables) {
      const result = await this.instance.publishMessage({
        correlationKey: correlationKey,
        messageId: uuid.v4(),
        name: messageName,
        variables: variables
      })
      return result
    }
  }

  fastify.decorate('ZeeBe', new ZeeBe())
}, { name: 'ZeeBe' })