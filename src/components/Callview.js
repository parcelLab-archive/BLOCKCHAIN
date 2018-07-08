const html = require('nanohtml')

module.exports = (state, emit) => {
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const input = document.querySelector('#call-id-input-xl')
    if (!isNaN(parseInt(input.value))) {
      const id = parseInt(input.value)
      emit('fetchCall', id)
    } else {
      alert('Please enter a valid Callit ID!')
    }
  }

  let result = null

  if (state.callId) {

  } else {
    result = html`
      <div class="jumbotron mt-3">
        <h1>Welcome to calledit.io <span class="badge badge-secondary">beta</span></h1>
        <p class="lead">You can start by searching for Call made or by creating your own Call in the blockchain of Ethereum!</p>
        <hr>
        <div class="row">
          <div class="col-sm space-top space-bottom">
            <form onsubmit=${handleSubmit}>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search for a Call ID" aria-label="Recipient's username" aria-describedby="basic-addon2" id="call-id-input-xl">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="submit">search</button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-sm space-top space-bottom">
            <button type="button" class="btn btn-primary btn-block" onclick=${evt => emit('openModal')}>Create a Call in the blockchain</button>
          </div>
        </div>
      </div>
  `
  }
  
  return result
}
