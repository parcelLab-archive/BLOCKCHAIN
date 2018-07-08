const html = require('nanohtml')
module.exports = (state, emit) => {
  const currentCall = state.currentCall ? html`
    <div>Current call: ${state.currentCall[0]}</div>
  ` : null

  return html`
    <main>
      <div>Loading: ${state.loading}</div>
      <div>callId: ${state.callId}</div>
      ${currentCall}
    </main>
  `
}
