import { btnChangeName } from './script.js';



function bla() {
    const inputs = [...document.querySelectorAll('[class^=inp')];

    document.querySelector('.btn__money').addEventListener('click', () => {
        // const data = inputs.map(inp => {
        //     return {
        //         name: inp.className,
        //         value: inp.value
        //     };
        // });

        const data = {};
        inputs.forEach(inp => {
            data[inp.className] = inp.value;
        });

        console.log(data);
    });
}

btnChangeName('Абракадабра');
