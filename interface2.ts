// optional property


interface Person1 {
  name: string;
  age: number;
}

interface Person2 {
  name: string;
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`안녕하세요 ${person.name} 입니다.`);
}

hello1({name: 'dong', age: 28});
// hello1({name: 'hyun'});

hello2({name: 'dong', age: 28});
hello2({name: 'hyun'});