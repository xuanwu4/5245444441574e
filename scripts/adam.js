import adam from '/adam.json' assert {type: 'json'};
var types = {0:"love",1:"war",2:"spring-summer",3:"fall-winter",4:"fate",5:"grief"};
function makePoem() {
  let type=types[(Math.random()*6) | 0];
  let poemLength = ((Math.random()*3)|0)*4;
  let poem = "";
  let taken = [];
  let lineNo = -1;
  let available = adam[type];
  for(let i = 0; i < poemLength; i++){
    if((i+1)%4 == 0){ poem += "\n"; }
    lineNo = ((Math.random()*available.length)|0);
    while (lineNo in taken){ // if taken, increment until not taken
      lineNo++;
      if(lineNo >= available.length) lineNo=0;
    }
    taken.append(lineNo);
    poem+=available[lineNo] + "\n";
  }
  return poem;
}