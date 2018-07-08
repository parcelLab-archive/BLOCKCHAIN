const html = require('nanohtml')

module.exports = (errText) => {
  return html`
  <div class="container">
    <div class="alert alert-danger">
      ${errText}
    </div>
  </div>
  `
}
