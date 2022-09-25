function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}   
async function printDelayed(txt,id,delay){
  let out = "";
  results = document.getElementById(id);
  for(let i = 0; i < txt.length; i++){
    out += txt[i];
    results.innerHTML = "<p>"+out+"</p>";
    await sleep(delay);
  }
}
