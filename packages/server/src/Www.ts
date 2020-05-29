import * as App from './App'
import * as ENV from './ENV'
import https from 'https'
import http from 'http'
import logger from './service/Logger'
/* Adapted from express-gen package */

const port = ENV.SERVER_PORT

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      logger.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening() {
  logger.debug('Listening BOOKING SERVER on ' + port)
  // if (!ENV.IS_DEMO) {
  //   sendMail(
  //     'tech@kombo.co',z
  //     'BookingServer has just restarted on ' + ENV.SERVER_URI + ':' + bind,
  //   )
  // }
}

App.createApp().then(app => {
  app.set('port', port)

  //const server = ENV.SSL_CERTIFICATE ? https.createServer(ENV.SSL_CERTIFICATE, app) : http.createServer(app)
  const server = http.createServer(app)
  server.listen(port)
  server.on('error', onError)
  server.on('listening', onListening)
})
