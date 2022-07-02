
export default class Circle extends Phaser.GameObjects.Arc {
    constructor(scene, x, y, dx, dy, radius, fillColor, fillAlpha = 1, type) {
        super(scene, x, y, radius, 0, 360, false, fillColor, fillAlpha);
        this.scene = scene

        /**
        * @type {Number} velocity of this object 
        */
        this.dx = dx
        this.dy = dy

        this.resources = 0;
        this.timer = 0;


        /**
        * @type {String} type of this object 
        */
        this.objectType = this.objectType
    }

    init() {
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)

        this.body.width = this.displayWidth
        this.body.height = this.displayHeight

        this.setInteractive()
        this.body.setCollideWorldBounds(true)
        this.body.setBounce(1)
    }

    /**
     * Movement Update
     */
    update(timer, delta) {
        this.timer += delta;
        let dx = this.dx
        let dy = this.dy
        dx = (Math.random() < 0.5 ? -1 : 1) * dx
        dy = (Math.random() < 0.5 ? -1 : 1) * dy
        this.x += dx
        this.y += dy
    }
}