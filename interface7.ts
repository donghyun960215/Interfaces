interface HelloPerson {
  (name:string, age?: number): void;
}

const helloPerson: HelloPerson = function(name: string, age?: number) {
  console.log(`안녕하세요! ${name} 입니다.`)
};

helloPerson('dong');

// age 부분에 ?를 지워주면 오류가 나온다.
