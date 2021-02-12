import Component from './helpers/Component';

export default class extends Component {
    constructor(hookId) {
        super(hookId);
        this.id = 'board';
        this.pieces = {
            'white': {
                 'king': '&#9812;',
                 'queen': '&#9813;',
                 'rook': '&#9814;',
                 'bishop': '&#9815;',
                 'knight': '&#9816;',
                 'pawn': '&#9817;'
            },
            'black': {
                 'king': '&#9818;',
                 'queen': '&#9819;',
                 'rook': '&#9820;',
                 'bishop': '&#9821;',
                 'knight': '&#9822;',
                 'pawn': '&#9823;'
            }
       };
        this.render();
    }

    // Returns HTML piece code depending on box indexes
    setPiece(i, j) {
        const color = i === 0 || i === 1 ? this.pieces.black : this.pieces.white;
        if (i === 0 || i === 7) {
            if (j === 0 || j === 7) {
                return color.rook;
            } else if (j === 1 || j === 6) {
                return color.knight;
            } else if (j === 2 || j === 5) {
                return color.bishop;
            } else if (j === 3 && i === 0) {
                return color.king;
            } else if (j === 4 && i === 7) {
                return color.king;
            }
            return color.queen;
        }
        if (i === 1) {
            return this.pieces.black.pawn;
        } else if (i === 6) {
            return this.pieces.white.pawn;
        } else {
            return ''
        }
    }

    createBoxes(parent) {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const boxType = (i + j) % 2 === 0 ? 'board__box--dark' : 'board__box--light';   
                const boxEl = this.createElement('div', `board__box ${boxType}`);
                boxEl.innerHTML = this.setPiece(i, j);
                parent.appendChild(boxEl);
            }
        }
    }


    render() {
        const boardEl = this.createRootEl('div', 'board', [{name: 'id', value: this.id}]);
        this.createBoxes(boardEl);
    }
}