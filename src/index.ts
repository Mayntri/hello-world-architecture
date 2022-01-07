export * from './sum';
export * from './hello';

export const logger = {
  /* eslint-disable no-console */
  log: (...rest: unknown[]) => console.log(...rest),
  info: (...rest: unknown[]) => console.info(...rest),
  warn: (...rest: unknown[]) => console.warn(...rest),
  error: (...rest: unknown[]) => console.error(...rest),
  /* eslint-enable no-console */
};

export const ping = () => logger.log('pong');

export const time = () => new Date().toISOString();

export const test = () => 'test';
