"use strict";
// optional property
function hello2(person) {
    console.log(`안녕하세요 ${person.name} 입니다.`);
}
hello1({ name: 'dong', age: 28 });
// hello1({name: 'hyun'});
hello2({ name: 'dong', age: 28 });
hello2({ name: 'hyun' });
