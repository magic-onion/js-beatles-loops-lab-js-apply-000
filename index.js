function theBeatlesPlay(musicians, instruments) {
    const barr = []
    
    for (let i = 0, l = musicians.length; i < l; i++) {
      barr.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    
    return barr
}

function johnLennonFacts(facts)