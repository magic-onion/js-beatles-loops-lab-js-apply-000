// add solution here
const musicians = ["John Lennon", "Paul McCArtney", "George Harrison", "Ringo"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
const array = [];
for (let i = 0; i < 5; i++) { 
   array.push('{$musicians} plays {$instruments}')
}
return array;
}

