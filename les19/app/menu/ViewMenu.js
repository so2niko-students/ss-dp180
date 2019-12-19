import { TemplateMenu } from './TemplateMenu.js';

export class ViewMenu {
    constructor(btnListener) {
        this.renderMenu();
        this.addListeners(btnListener);
    }

    renderMenu() {
        this.componentMenu = document.querySelector('.component__menu');
        this.componentMenu.innerHTML = TemplateMenu.getTemplate();
        this.input = document.querySelector('.input__search');
    }

    addListeners(searchFunc) {
        this.btnSearch = document.querySelector('.btn__search');
        this.btnSearch.addEventListener('click', searchFunc);
    }

    get searchValue() {
        return this.input.value;
    }
}