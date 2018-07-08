const settings = require('./settings')
const store = require('./store')

if (typeof window.web3 !== 'undefined') {
  initialize(new window.Web3(window.web3.currentProvider))
} else {
  initialize(null)
}

function initialize (web3interface) {
  if (web3interface) {
    window.web3interface = web3interface
    window.calledItContract = web3interface.eth
      .contract(settings.contractInterface).at(settings.calledItContractAddress)

    window.fetchCall = (id, cb) => new Promise((resolve, reject) => {
      window.calledItContract.calls(id, (err, res) => {
        if (err) reject(err)
        else resolve(res)
      })
    })
  } else store.set({ error: ' 🦊 You need to install MetaMask!' })
  window.store = store // just debug things
}
