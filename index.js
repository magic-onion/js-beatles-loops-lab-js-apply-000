function theBeatlesPlay(musicians, instruments) {
    const barr = []
    
    for (let i = 0, l = musicians.length; i < l; i++) {
      barr.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    
    return barr
}

function johnLennonFacts(facts) {
  const shoutfacts = []
  
  let i = 0
  while (i < facts.length) {
    shoutfacts.push(`${facts[i]}!!!`)
    i++
  }
  return shoutfacts
}

function iLoveTheBeatles(n) {
  const arr = []
  
  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 100)
  return arr
}
