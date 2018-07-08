const html = require('nanohtml')
const Splash = require('./Splash')

module.exports = (state, emit) => {
  let appBody = null

  if (state.loading) appBody = Splash()
  else appBody = html`
    <div>
      <div>Loading: ${state.loading}</div>
      <div>callId: ${state.callId}</div>
      <div>Current call: ${state.currentCall ? state.currentCall[0] : 'na'}</div>
    </div>
  `
  return html`
    <main>
      ${appBody}
    </main>
  `
}
