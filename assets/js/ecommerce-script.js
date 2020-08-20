console.log("I'm in the mainframe!!!1")

// define macro functions
const select = (e) => document.querySelector(e)
const selectAll = (e) => document.querySelectorAll(e)

// list of payload functions to execute on the site
const payloads = []

payloads.push(() => {
  // replace slogan
  let slogan = select('#slogan')
  slogan.innerText = slogan.innerText.replace('LOVE', 'HATE')
  console.log('PAYLOAD: slogan ruined')
})

payloads.push(() => {
  select('#all').style.backgroundColor = '#c7c3c3'
  console.log('PAYLOAD: background modified')
})

payloads.push(() => {
  select('body').style.fontFamily = 'Impact'
  console.log('PAYLOAD: font changed to Impact')
})

function execPayloads() {
  payloads.forEach(payload => {
    // execute payload
    payload()
  })
}