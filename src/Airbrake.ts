import { Notifier } from '@airbrake/browser';

export const notificaAirbrake = () => {
  const airbrake = new Notifier({
    projectId: 591877,
    projectKey: 'c49cb180a4d19ddf215e025dc910b773',
    instrumentation: { onerror: false }
  })

  airbrake.addFilter((filters) => {
    const filtros = filters
    filtros.context.environment = 'production'

    return filtros
  })

  airbrake.notify({
    error: `Página qrcode`,
  })
}