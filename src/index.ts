export const logger = {
    log: (...rest: any[]) => console.log(...rest),
    info: (...rest: any[]) => console.info(...rest),
    warn: (...rest: any[]) => console.warn(...rest),
    error: (...rest: any[]) => console.error(...rest),
}

export const ping = () => logger.log('pong')

export const time = () => new Date().toISOString()