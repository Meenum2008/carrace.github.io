class Player{
constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
    this.move=0;
    this.rank=null;
}

getCount(){
    var playerCountref=database.ref('playerCount');
    playerCountref.on("value",function (data) {
        playerCount= data.val();
    })
}

updateCount(count){
    database.ref('/').update({playerCount:count})
}

update(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        move:this.move,
        rank:this.rank
    })
}

static getPlayerinfo(){
    var playerInforef=database.ref('players');
        playerInforef.on("value",(data)=>{
            allplayers=data.val();
        })
    }


getCarsend(){
database.ref('carsend').on("value",(data)=>{
 this.rank=data.val();

})
}

static updateCarsend(rank){
    database.ref('/').update({carsend:rank})
    
    }
}