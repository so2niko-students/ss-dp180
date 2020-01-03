fetch('https://api.telegram.org/bot957348871:AAE-U6v_g4toCvwz-3X-uL6C6odnk_0skkk/getUpdates')
    .then(d => d.json())
    .then(data => {
        console.log(data);
        getIDs(data);
    });

function getIDs(data) {
    let idS = JSON.parse(localStorage.getItem('ids') || '{}');
    data.result.forEach(msg => {
        idS[msg.message.chat.id] = msg.message.chat.id;
    });
    localStorage.setItem('ids', JSON.stringify(idS));
}

function sendMsg(txt = '<h3>Hello</h3><p>My name is Bot</p>') {
    let idS = JSON.parse(localStorage.getItem('ids') || '{}');
    Object.keys(idS).forEach(key => {
        console.log(key);
        fetch(`https://api.telegram.org/bot957348871:AAE-U6v_g4toCvwz-3X-uL6C6odnk_0skkk/sendMessage?chat_id=${key}&text=${encodeURIComponent(txt)}&parse_mode=MarkDown`);
    });
}

let str = `***Hi, user.***


My name is BOT`;
// sendMsg(str);