function drowsap(){
   in = document.getElementById("in");
   out = document.getElementById("result");
   page = "";
   if(in === "through snow or rain or heat or gloom of night"){page = "personnel/53656c6c206120636f756e7472792120576";}
   else if(in === "like the wind"){page = "personnel/2077656c6c2061732074686520656172746";}
   else if(in === "with its wings dumbass"){page = "personnel/206f6620686973206368696c6472656e3f20";}
   else if(in === "until it can fly no longer"){page = "personnel/722c2074686520636c6f75647320616e642";}
   else if(in === "with friend or flock beside them"){page = "personnel/879206e6f742073656c6c20746865206169";}
   else if(in === "on wings of ash and bone"){page = "personnel/0746865206772656174207365612c206173";}
   else if(in === "over its augurs"){page = "personnel/617420537069726974206d616b652074686";}
   else if(in === "only on tuesdays"){page = "personnel/83f20446964206e6f742074686520477265";}
   else if(in === "no differently than the hawk"){page = "personnel/56d20616c6c20666f722074686520757365";}

   if(!(page === "")){out.innerHTML = "<a href=\"" + page + "\" style=\"color:green;\">Access Granted.</a>";}
   else{out.innerHTML = "";}
}