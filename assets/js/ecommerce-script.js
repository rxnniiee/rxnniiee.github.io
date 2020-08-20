console.log("I'm in the mainframe!!!1")

// define macro functions
const select = (e) => document.querySelector(e)
const selectAll = (e) => document.querySelectorAll(e)

// list of payload functions to execute on the site
const payloads = []

payloads.push(() => {
  // replace slogan
  let slogan = select('#slogan')
  slogan.innerText = slogan.replace('LOVE', 'HATE')
})

for (payload in payloads) {
  payload()
}