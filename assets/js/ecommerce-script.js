console.log("I'm in the mainframe!!!1")

// define macro functions
const select = (e) => document.querySelector(e)
const selectAll = (e) => document.querySelectorAll(e)

// list of payload functions to execute on the site
const payloads = {
  level_1: [],
  level_2: [],
  level_3: []
}

// LEVEL 1
payloads.level_1.push(() => {
  let slogan = select('#slogan')
  slogan.innerText = slogan.innerText.replace('LOVE', 'HATE')
  console.log('PAYLOAD: slogan ruined')
})

payloads.level_1.push(() => {
  select('#all').style.backgroundColor = '#c7c3c3'
  console.log('PAYLOAD: background modified')
})

payloads.level_1.push(() => {
  select('body').style.fontFamily = 'Impact'
  console.log('PAYLOAD: font changed to Impact')
})

// LEVEL 2
payloads.level_2.push(() => {
  selectAll('#hot .item').forEach(element => {
    element.style.margin = '10px 20px'
    element.style.boxShadow = '2px 2px 10px #000'
  })
  console.log('PAYLOAD: added margin and box-shadow to `#hot .item`')
})

payloads.level_2.push(() => {
  let navList = select('ul.navbar-nav') // ul

  // create elements
  let navListItem = document.createElement('li') // create new <li>
  let navListItemLink = document.createElement('a') // create new <a>
  let navListItemLinkText = document.createTextNode('Newsletter') // text that says "Newsletter"

  // give elements properties before appending
  navListItem.classList.add('nav-item', 'menu-large')
  navListItemLink.classList.add('nav-link')
  // navListItemLink.href = '#' // <-- makes the pointer cursor appear, but probably not what Hoang wants

  // append
  navListItemLink.append(navListItemLinkText)
  navListItem.append(navListItemLink)
  navList.append(navListItem)
  console.log('PAYLOAD: added a new nav element `Newsletter`')
})

payloads.level_2.push(() => {
  let css = 'ul.navbar-nav .nav-link:hover { cursor: pointer; }'
  let style = document.createElement('style')

  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }

  Array
    .from(selectAll('ul.navbar-nav > li'))
    .filter(element => element.innerText === 'NEWSLETTER')[0]
    .appendChild(style)

  console.log('PAYLOAD: added :hover to `Newsletter`. It now has a cursor pointer!')
})

// LEVEL 3


// manually trigger all payloads. just run execPayloads() in the console
function execPayloads(level = 0) {
  switch (level) {
    case 1:
      payloads.level_1.forEach(payload => payload())
      break
    case 2:
      payloads.level_2.forEach(payload => payload())
      break
    case 3:
      payloads.level_3.forEach(payload => payload())
      break
    default:
      Object.keys(payloads).forEach(key => {
        payloads[key].forEach(payload => payload())
      })
      break
  }
}