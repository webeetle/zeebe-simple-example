const ZB = require('zeebe-node')

void (async () => {
  const zbc = new ZB.ZBClient('zeebe:26500')
  zbc.createWorker('odd-or-even', (job, complete, worker) => {
    console.log('Received Task')
    const variables = job.variables
    complete.success({ ...variables, result: (variables.valore % 2 ===0) ? 'even' : 'odd'})
  })
})()