import { forzaHorizon5Client } from '.'

const client = new forzaHorizon5Client({ address: '192.168.1.5'})



client.on('data-out', (message) => {
  console.log(message)
})


client.start()