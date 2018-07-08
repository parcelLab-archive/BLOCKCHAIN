const morph = require('nanomorph')
const settings = require('./settings')
const store = require('./store')
const App = require('./components/App')

function checkForMetaMask (store) {
  if (typeof window.web3 !== 'undefined') { // is web3 available?
    if (window.web3.eth) {
      return true
    }
  }

  store.set({ error: 'Please make sure that you have MetaMask installed / up and running!' })
  return false
}

;(function initialize () {
  if (checkForMetaMask(store)) {
    // setup all web3 functions
    const web3interface = new window.Web3(window.web3.currentProvider)

    window.web3interface = web3interface

    window.calledItContract = web3interface.eth
      .contract(settings.contractInterface).at(settings.calledItContractAddress)

    window.fetchCall = (id, cb) => new Promise((resolve, reject) => {
      window.calledItContract.calls(id, (err, res) => {
        if (err) reject(err)
        else resolve(res)
      })
    })
  }

  window.store = store

  // render app
  const app = App(store.get(), store.emit)
  document.querySelector('#app-root').innerHTML = ''
  document.querySelector('#app-root').appendChild(app)


  // subscribe app to store
  store.subscribe((state) => {
    morph(app, App(state, store.emit))
  })
})()
