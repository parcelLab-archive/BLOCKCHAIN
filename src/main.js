const riot = require('riot')
window.riot = riot
require('./tags/App.tag')
const settings = require('./settings')
let web3js = null

if (typeof window.web3 !== 'undefined') {
  web3js = new window.Web3(window.web3.currentProvider)
  initialize(web3js)
} else {
  // set the provider you want from Web3.providers
  initialize(null)
}

function initialize (web3js) {
  window.calledItContract = web3js ? web3js.eth
    .contract(settings.contractInterface).at(settings.calledItContractAddress) : null
  window.fetchCalls = (id, cb) => new Promise((resolve, reject) => {
    window.calledItContract.calls(id, (err, res) => {
      if (err) reject(err)
      else resolve(res)
    })
  })

  console.log('🚀  mounting app...')
  console.log(riot)
  riot.mount('*', { web3js })
}
