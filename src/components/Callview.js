const html = require('nanohtml')
const Alert = require('./Alert')

module.exports = (state, emit) => {
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const input = document.querySelector('#call-id-input-xl')
    if (!isNaN(parseInt(input.value))) {
      const id = parseInt(input.value)
      emit('fetchCall', id)
    } else {
      window.swal('Ohh', 'Please enter a valid Call ID!', 'warning')
    }
  }

  const handleCreateCall = evt => {
    evt.preventDefault()
    window.swal({
      title: `It's time for a new Call!`,
      content: {
        element: 'input',
        attributes: {
          placeholder: 'What do you want to call?',
          type: 'text',
        },
      },
    })
      .then(input => {
        if (input) {
          emit('callIt', input)
        }
      })
  }

  let result = null

  if (typeof state.callId === 'number' && state.currentCall) {
    result = html`
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title">
          ${state.currentCall[0]}
        </h5>
        <p class="card-text">
          Call created: ${new Date(state.currentCall[2] * 1000).toLocaleDateString()} at ${new Date(state.currentCall[2] * 1000).toLocaleTimeString()}
        </p>
        <p class="card-text">
          Creator: <span class="badge badge-secondary">${state.currentCall[1]}</span>
        </p>
      </div>
    </div>
    `
  } else {
    const alert = state.callId ? Alert('Could not find Call with this ID!') : null
    result = html`
      <div class="jumbotron mt-3">
        ${alert}
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
            <button type="button" class="btn btn-primary btn-block" onclick=${handleCreateCall}>Create a Call in the blockchain</button>
          </div>
        </div>
      </div>
  `
  }
  
  return result
}
