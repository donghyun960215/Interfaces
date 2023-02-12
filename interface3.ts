interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
  //어떤이름의 프로퍼티가 와도 괜찮다라는 의미가 있다.
};

function hello3(person: Person3): void{
  console.log(`안녕하세요 ${person.name} 입니다.`);
};

const p31: Person3 = {
  name: 'dong',
  age: 28,
};

const p32: Person3 = {
  name: 'hyun',
  systers: ['Sung','Chan'],
};

const  p33: Person3 = {
  name: 'lee',
  father: p31,
  mother: p32,
};

hello3(p33);

