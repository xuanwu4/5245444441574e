var blip = new Howl({src: ['https://xuanwu4.github.io/545249534b454c494f4e/scripts/text_appear.ogg', 'https://xuanwu4.github.io/545249534b454c494f4e/scripts/text_appear.mp3'], volume: 0.1});
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}   
async function printDelayed(txt,id,delay){
  let out = "";
  results = document.getElementById(id);
  for(let i = 0; i < txt.length; i++){
    blip.play();
    out += txt[i];
    results.innerHTML = "<p>"+out+"</p>";
    await sleep(delay);
  }
}

async function printDelayed_pre(txt,id,delay){
  let out = "";
  results = document.getElementById(id);
  for(let i = 0; i < txt.length; i++){
    blip.play();
    out += txt[i];
    results.innerHTML = "<pre>"+out+"</pre>";
    await sleep(delay);
  }
}

async function printDelayed_nosound(txt,id,delay){
  let out = "";
  results = document.getElementById(id);
  for(let i = 0; i < txt.length; i++){
    out += txt[i];
    results.innerHTML = "<p>"+out+"</p>";
    await sleep(delay);
  }
}

async function printDelayed_pre_nosound(txt,id,delay){
  let out = "";
  results = document.getElementById(id);
  for(let i = 0; i < txt.length; i++){
    out += txt[i];
    results.innerHTML = "<pre>"+out+"</pre>";
    await sleep(delay);
  }
}

