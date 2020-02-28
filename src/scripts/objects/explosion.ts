export default class Explosion extends Phaser.GameObjects.Sprite{
    body: Phaser.Physics.Arcade.Body;
    constructor(scene, x, y){
        super(scene, x, y, "explosion");
        scene.add.existing(this);
        this.play("explode");
    }
}