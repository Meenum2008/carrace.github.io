class Game{
    constructor(){

    }

    getState(){
        var gamestateref=database.ref('gameState');
        gamestateref.on("value", function(data) {
        gameState=data.val(); 
        })
    }

    update(state){
        database.ref('/').update({gameState:state})
    }

    async start(){
        if(gameState===0){
            player= new Player();
            var playercountref=await database.ref('playerCount').once("value");

            if(playercountref.exists()){
                playerCount=playercountref.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
          car1=createSprite(100,200);
          car1.addImage(c1);
          car2=createSprite(300,200);
          car2.addImage(c2);
          car3=createSprite(500,200);
          car3.addImage(c3);
          car4=createSprite(700,200);
          car4.addImage(c4);
          cars = [car1, car2, car3, car4]
    
        
        
          

    }
     
    play(){
        form.hide();
        textSize(30);
        fill("Black")
        text("Game Start",120,100);
        
        Player.getPlayerinfo();

        if(allplayers!=undefined){
            background(50,50,50);
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index=0;
            var x=100;
            var y;
            var move;


            for(var plr in allplayers){
                index=index+1;
                x=x+250;
                y=displayHeight-allplayers[plr].distance;
                move=allplayers[plr].move;
                cars[index-1].x=x+move;
                cars[index-1].y=y;

                if(index===player.index){
                    stroke(10);
                    fill("red");
                    ellipse(x+move,y,60,60)
                    cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y
                }
            }
        }

        if(keyIsDown(UP_ARROW)&&player.index!=null){
            player.distance+=10;
            player.update();
        }
        if(keyIsDown(LEFT_ARROW)&&player.index!=null){
            player.move=player.move-10;
            player.update();
        }
        if(keyIsDown(RIGHT_ARROW)&&player.index!=null){
            player.move=player.move+10;
            player.update();
        }
      
        if(player.distance>=4120){
            gameState=2;
            player.rank+=1;
            Player.updateCarsend(player.rank);
        }

        drawSprites();
    }      
    
    end(){
        console.log("Game Over");
        console.log(player.rank);
    }
}
