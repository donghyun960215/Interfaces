"use strict";
;
function hello3(person) {
    console.log(`안녕하세요 ${person.name} 입니다.`);
}
;
const p31 = {
    name: 'dong',
    age: 28,
};
const p32 = {
    name: 'hyun',
    systers: ['Sung', 'Chan'],
};
const p33 = {
    name: 'lee',
    father: p31,
    mother: p32,
};
hello3(p33);
