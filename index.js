// add solution here
var musicians = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr"
  ]

var instruments - [
  "Guitar",
  "Bass Guitar",
  "Lead Guitar",
  "Drums"
  ]

function theBeatlesPlay() {
  var i;
for (i = 0; i < musicians.length + instruments.length; i++) { 
    musicians[i] + "plays" + instruments[i];
}
}