const ZB = require('zeebe-node')
const uuid = require('uuid')

const correlationKey = process.argv.slice(2)

void (async () => {
  const zbc = new ZB.ZBClient('localhost:26500')
  zbc.publishMessage({
    correlationKey: correlationKey[0],
    messageId: uuid.v4(),
    name: 'messageValue',
    variables: { valore: Math.floor(Math.random() * 10) }
  })
})()