interface Person1 {
  name: string;
  age: number;
}

function hello1(parson: Person1): void {
  console.log(`안녕하세요! ${parson.name} 입니다.`);
}

const p1: Person1 = {
  name: 'dong',
  age: 28,
};

hello1(p1);