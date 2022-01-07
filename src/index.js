const logger = {
    log: (...rest) => console.log(...rest),
    info: (...rest) => console.info(...rest),
    warn: (...rest) => console.warn(...rest),
    error: (...rest) => console.error(...rest),
}

const ping = () => logger.log('pong')

const time = () => new Date().toISOString()

module.exports = {
    logger,
    ping,
    time
}