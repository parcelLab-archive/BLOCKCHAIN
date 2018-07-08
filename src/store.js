const Nanostore = require('nanostore')
const store = new Nanostore({
  loading: false,
  callId: null,
  currentCall: null,
  error: null,
})

store.on('fetchCall', (newCallId) => {
  store.set({ loading: true })

  window.fetchCall(newCallId)
    .then(res => {
      store.set({ callId: newCallId, currentCall: res, loading: false, error: null })
    })
    .catch(err => {
      console.log(err)
      store.set({ loading: false, callId: newCallId, currentCall: [] })
    })
})

store.on('callIt', (text) => {
  store.set({ loading: true })
  const txAmount = window.web3.toWei(0.001, 'ether')
  const gasAmount = window.web3.toWei(0.0000000000005, 'ether')

  window.calledItContract.callIt(text, { value: txAmount, gas: gasAmount }, (err, res) => {
    if (err) store.set({ error: err, loading: false })
    else store.set({ callIt_success: true, loading: false })
  })
})

store.on('openModal', () => {
  console.log('open!!!')
})

module.exports = store
