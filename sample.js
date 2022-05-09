 //countDown
 if(gameState === "wait") {
    setTimeout(()=> {
      countdown -= 1;
      gameState = "wait2";
    },1000);
    }
      
    if(gameState === "wait2") {
      setTimeout(()=> {
        countdown -= 1;
        gameState = "play";
      },1000);
      }