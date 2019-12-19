export class TemplateMenu {
    static getTemplate() {
        return `<input type="text" class="form-control input__search" placeholder="Recipient's username"
        aria-label="Recipient's username with two button addons" aria-describedby="button-addon4">
    <div class="input-group-append" id="button-addon4">
        <button class="btn btn-outline-secondary btn__search" type="button">Поиск</button>
        <button class="btn btn-outline-secondary" type="button">Мне повезёт</button>
    </div>`;
    }
}