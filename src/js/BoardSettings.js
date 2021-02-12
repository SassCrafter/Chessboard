import Component from './helpers/Component';

export default class extends Component {
    constructor(hookId) {
        super(hookId);
        this.render();
        this.setupListeners();
    }


    setupListeners() {
        const gameControls = document.querySelector('.game__controls');
        gameControls.addEventListener('click', this.settingsClickHandler.bind(this));
    }

    createOption(text, attributes, extraText, parent = this.rootEl) {
        const optionEl = this.createElement('button', 'btn btn--option', attributes);
        optionEl.textContent = text;
        if (extraText) {
            const span = document.createElement('span');
            span.textContent = `: ${extraText}`;
            optionEl.appendChild(span);
        }
        parent.appendChild(optionEl);
    }


    restart() {
        console.log(restart);
    }

    toggleOptions() {
        this.rootEl.classList.toggle('hidden');
    }


    settingsClickHandler(e) {
        const method = e.target.closest('.btn').dataset.action;
        if (method) {
            this[method]();
        }
    }


    optionClickHandler(e) {
        console.log(e);
    }


    render() {
        this.rootEl = this.createRootEl('div', 'board__options hidden');
        console.log(this.rootEl);
        this.createOption('back', [{name: 'data-action', value: 'back'}]);
        this.createOption('theme', [{name: 'data-action', value: 'back'}], 'wood');
        this.createOption('color', [{name: 'data-action', value: 'back'}], 'black');
        this.rootEl.addEventListener('click', this.optionClickHandler.bind(this));
    }
}