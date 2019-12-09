const btn = document.getElementById('mad__btn');

export function btnChangeName(name = 'noname') {
    console.log(btn);
    const btnClass = '.btn__money';
    // document.querySelector(btnClass).innerHTML = name;
    btn.innerHTML = name;
}