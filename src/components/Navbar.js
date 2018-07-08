const html = require('nanohtml')

module.exports = (state, emit) => {
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const input = document.querySelector('#call-id-input')
    if (!isNaN(parseInt(input.value))) {
      const id = parseInt(input.value)
      emit('fetchCall', id)
    } else {
      window.swal('Ohh', 'Please enter a valid Call ID!', 'warning')
    }
  }

  return html`
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="/">CALL IT</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Make a Call!</a>
          </li> -->
        </ul>
        <form class="form-inline my-2 my-lg-0" onsubmit=${handleSubmit}>
          <input class="form-control mr-sm-2" type="text" placeholder="Search Call ID" aria-label="Search" id="call-id-input">
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">search</button>
        </form>
      </div>
    </nav>
  `
}
