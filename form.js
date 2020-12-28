class Form {
    constructor(){
        this.Input=createInput('name');
        this.Button= createButton('Play');
        this.Greetings=createElement('h3');
        this.button=createButton('Reset')
    }

    hide(){
        this.Input.hide();
        this.Button.hide();
        this.Greetings.hide();
    }

    display(){
        var Title= createElement('h2');
        Title.html("Car Racing Game");
        Title.position(displayWidth/2-50,0);

        this.button.position(displayWidth-100,20);
        
        this.Input.position(displayWidth/2-40,displayHeight/2-80);
        
        this.Button.position(displayWidth/2+30,displayHeight/2);
        
        this.Button.mousePressed( ()=> {
            this.Input.hide();
            this.Button.hide();
            player.name=this.Input.value();
            playerCount+=1 ;
            player.index=playerCount;
            player.update(); 
            player.updateCount(playerCount);
            this.Greetings.html("Hello "+player.name)
            this.Greetings.position(displayWidth/2-70,displayHeight/4)
        })

        this.button.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
        })
    }
}