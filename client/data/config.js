import Raven from 'raven-js';

// const sentry_key = 'cb55d4f05cd443ce82303222f77ef5e0';
const sentry_key = '5e7e46d5fc014e669c2cb87fa7efd0b8';
// const sentry_app = '61499';
const sentry_app = '1217493';
// export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
