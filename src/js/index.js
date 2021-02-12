import Board from './Board';
import BoardSettings from './BoardSettings';
import '../sass/style.scss';



class App {
    static init() {
        this.board = new Board('board-wrapper');
        this.boardSettings = new BoardSettings('board-wrapper');
        //App.setUpListeners();
    }

    // static setUpListeners() {
    //     const gameControls = document.querySelector('.game__controls');

    //     gameControls.addEventListener('click', App.controlClickHandler.bind(this));
    // }

    // static controlClickHandler(e) {
    //     const target = e.target.closest('.btn');
    //     console.log(target);
    // }
}

App.init();