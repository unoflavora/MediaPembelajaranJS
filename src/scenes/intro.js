import Phaser from "phaser";
import Circle from "../gameobject/Circle";

export default class IntroScene extends Phaser.Scene {
    constructor(config) {
        super(config)
    }

    init() {
        this.dx = .5
        this.dy = .5
        this.radius = 10

        /**
         * @type {Object} Cell type and its radius
         */
        this.cellType = {
            'cell A': { dx: 5, dy: 5, radius: 10, color: 1274543 },
            'cell B': { dx: 2, dy: 2, radius: 15, color: 11509267 },
            'cell C': { dx: 1, dy: 1, radius: 20, color: 11473700 }
        }
    }

    create() {
        this.cells = this.add.group()

        this.setupGame()

        this.setupCell();
    }

    update(timer, delta) {
        this.cells.children.iterate(cell => cell.update(timer, delta))
    }

    setupGame() {

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX
            gameObject.y = dragY
        })
    }

    setupCell() {
        for (const cellType in this.cellType) {
            const cell = this.cellType[cellType]

            for (let i = 0; i < Math.random() * 10; i++) {
                let x = Math.random() * this.scale.width;
                let y = Math.random() * this.scale.height;
                let dx = (Math.random()) * cell.dx
                let dy = (Math.random()) * cell.dy

                cell.gameObject = new Circle(this, x, y, dx, dy, cell.radius, cell.color, 1)
                cell.gameObject.init();
                cell.gameObject.objectType = cellType
                this.input.setDraggable(cell.gameObject);
                this.cells.add(cell.gameObject);
            }

            this.physics.add.collider(this.cells, this.cells, (cell1, cell2) => {
                if (cell1.objectType === cell2.objectType) {
                    cell1.setDisplaySize(cell1.displayWidth + cell2.displayWidth, cell1.displayHeight + cell2.displayHeight)
                    cell2.destroy()
                }
            });
        }



    }



}