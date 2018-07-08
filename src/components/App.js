const html = require('nanohtml')
const Navbar = require('./Navbar')
const Callview = require('./Callview')
const Splash = require('./Splash')
const Alert = require('./Alert')

module.exports = (state, emit) => {
  let appBody = null

  if (state.loading) appBody = Splash()
  else if (state.error) appBody = Alert(state.error)
  else appBody = Callview(state, emit)

  return html`
    <main>
      ${Navbar(state, emit)}
      <div class="container" style="padding-top: 25px;">
        ${appBody}
      </div>
    </main>
  `
}
