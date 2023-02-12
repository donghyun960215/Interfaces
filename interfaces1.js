"use strict";
function hello1(parson) {
    console.log(`안녕하세요! ${parson.name} 입니다.`);
}
const p1 = {
    name: 'dong',
    age: 28,
};
hello1(p1);
