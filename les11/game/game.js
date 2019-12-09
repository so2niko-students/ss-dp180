/** DnD
 * 1. Делаем элементы тащибельными
 * 2. Запоминаем id/class тащимого элемента
 * 3. Отмена запрета на приём тащимого элемента(на рюкзак)
 * 4. Принятия тащимого объекта
 *  */

const menu = {
    initWeight: .5,
    weightVal: 0,
    countVal: 0,
    addTusha: function () {
        this.weightVal += this.initWeight;
        this.countVal += 1;

        this.counter.innerText = this.countVal;
        this.weight.innerText = this.weightVal;
    },
    init: function () {
        this.counter = document.querySelector('.menu__count');
        this.weight = document.querySelector('.menu__weight');

        this.counter.innerText = this.countVal;
        this.weight.innerText = this.weightVal;
    }
};


document.addEventListener('DOMContentLoaded', () => {
    const backPack = document.querySelector('.backpack');

    backPack.addEventListener('dragover', allowDrop);
    backPack.addEventListener('drop', onDrop);
    addDragable();
    menu.init();

});

function addDragable() {
    let counter = Date.now();
    [...document.querySelectorAll('.tusha')].forEach(el => {
        el.setAttribute('draggable', true);
        el.id = `tusha${counter--}`;
        el.addEventListener('dragstart', dragStart);
    });
}

function dragStart(ev) {
    ev.dataTransfer.setData('id', ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function onDrop(ev) {
    const tusha = document.querySelector(`#${ev.dataTransfer.getData('id')}`);
    ev.target.appendChild(tusha);

    menu.addTusha();
}