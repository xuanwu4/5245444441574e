function refresh(){ document.getElementById("in").value = ""; document.getElementById("result") = ""; }
function drowsap(){
   let i = document.getElementById("in").value;
   let out = document.getElementById("result");
   let page = "";
   if(i === "through snow or rain or heat or gloom of night"){page = "personnel/53656c6c206120636f756e7472792120576";}
   else if(i === "like the wind"){page = "personnel/2077656c6c2061732074686520656172746";}
   else if(i === "with its wings dumbass"){page = "personnel/206f6620686973206368696c6472656e3f20";}
   else if(i === "until it can fly no longer"){page = "personnel/722c2074686520636c6f75647320616e642";}
   else if(i === "with friend or flock beside them"){page = "personnel/879206e6f742073656c6c20746865206169";}
   else if(i === "on wings of ash and bone"){page = "personnel/0746865206772656174207365612c206173";}
   else if(i === "over its augurs"){page = "personnel/617420537069726974206d616b652074686";}
   else if(i === "only on tuesdays"){page = "personnel/83f20446964206e6f742074686520477265";}
   else if(i === "no differently than the hawk"){page = "personnel/56d20616c6c20666f722074686520757365";}

   if(!(page === "")){out.innerHTML = "<a href=\"" + page + "\" style=\"color:green;\">Access Granted.</a>";}
   else{out.innerHTML = "";}
}
