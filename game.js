let game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 320,
    height: 240,
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        autoCenter: Phaser.Scale.Center.CENTRE_BOTH
    },
    backgroundColor: "#d95d45",
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
});


function preload(){
    this.load.image( "ufo", "./ufo.png" );
}

function create(){
    this.move_direction = 1;
    this.obj_ufo = this.add.image( 10, 120, "ufo" );
}

function update(){
    this.obj_ufo.x += this.move_direction;

    // dont go past the horizontal bars
    if( this.obj_ufo.x > this.game.config.width ){
        this.move_direction = -1;
    }
    if( this.obj_ufo.x < 0 ){
        this.move_direction = 1;
    }
}