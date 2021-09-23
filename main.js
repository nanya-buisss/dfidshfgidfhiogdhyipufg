var reasons = [
    "Lily (my sister)",
    "meet my brother, Jonathan ;-;",
    "meat me dad",
    "Me mum"
  ];
  var images = [
    "https://i.pinimg.com/originals/fa/cd/bb/facdbb6a9089f9f39c1970944b0ed4e6.png",
    "https://static.wikia.nocookie.net/5c7b6a8d-f4f4-4a4b-aded-bca48f7c4e9a",
    "https://i.redd.it/ss924lpeleo41.jpg",
    "https://static.wikia.nocookie.net/5bb5d0a2-37b4-4856-828a-938d6cd79a4a/scale-to-width/755"
  ];
  
  var i = 0;
  function nextslide(){
    document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src=images[i];
    i++;
    document.getElementById("audio").play();
  }