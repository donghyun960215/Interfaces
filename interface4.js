"use strict";
;
const p41 = {
    name: 'dong',
    age: 28,
    hello: function () {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    },
};
const p42 = {
    name: 'dong',
    age: 28,
    hello() {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    },
};
p41.hello();
p42.hello();
