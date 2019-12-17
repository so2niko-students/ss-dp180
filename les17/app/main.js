import { Singleton } from './singletones/Singleton2.js';

// const s1 = Singleton.getInstance();
// let s3;
// setTimeout(() => {
//     s3 = Singleton.getInstance();
//     console.log(s3.time, Date.now());
// }, 3000);
// const s2 = Singleton.getInstance();

// console.log(s1, s2);
// console.log(s1.time == s2.time);
// console.log(s1 === s2);

const s1 = new Singleton();
let s3;
setTimeout(() => {
    s3 = new Singleton();
    console.log(s3.time, Date.now());
}, 3000);
const s2 = new Singleton();

console.log(s1, s2);
console.log(s1.time == s2.time);
console.log(s1 === s2);
console.log(s1.getTime());