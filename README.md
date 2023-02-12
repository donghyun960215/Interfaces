# Interfaces

## optional property

### ?
```ts
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
hello1({name: 'hyun'}); //오류

hello2({name: 'dong', age: 28});
hello2({name: 'hyun'});
```
```plaintext
Interface 설정시 '?'를 삽입을 하면 사용을 해도되고 안해도되는걸로 변경이 된다.

hello1에 name 만 삽입을 했을 경우 오류가 생기지만 
hello2 에는 age 부분에 '?'를 넣어서 오류가 생기지 않는다.
```

### index
```ts
interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
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
```
```plaintext
index : 어떤이름의 프로퍼티가 와도 괜찮아 라는 의미가 있다.
```

## Function in interface
 ```ts
 interface Person4 {
  name: string;
  age: number;
  hello(): void;
};

const p41: Person4 = {
  name: 'dong',
  age: 28,
  hello: function(): void{
    console.log(`안녕하세요! ${this.name} 입니다.`);
  },
};

const p42: Person4 = {
  name: 'dong',
  age: 28,
  hello(): void{
    console.log(`안녕하세요! ${this.name} 입니다.`);
  },
};

p41.hello();
p42.hello();
 ```

 ```plaintext
interface 생성시 function 사용가능
 ```

## class implements interface
```ts
interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;
  constructor(name: string){
    this.name = name;
  }
  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }

}

const person = new Person("dong");
console.log(person.hello());
```
```plaintext
  Person의 경우 IPerson1를 implements 하고 있기 때문에  
  const person: Iperson1 = new Person("dong");
  위 와 같이 작성을 해도 오류가 생기지 않는다.
```

## interface extends interface
```ts
interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: "이동현",
  city: "파주",
  age: 28
};
```
```plaintext
IKorean의 경우 IPerson2를 extends(상속) 받았기 때문에 기본적으로 name,age 를 가지고 있다.
```

## function interface
```ts
interface HelloPerson {
  (name:string, age?: number): void;
}

const helloPerson: HelloPerson = function(name: string, age?: number) {
  console.log(`안녕하세요! ${name} 입니다.`)
};

helloPerson('dong');
```
```plaintext
const helloPerson: HelloPerson = function(name: string, age?: number)
위 와 같은 부분에서 age를 정의를 안해도 오류가 뜨지않는다. 하지만 ? 를 지우면 오류가 발생한다.
```

## Readonly interface Properties
```ts
interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: "dong",
  gender: "male",
}
p81.gender = "female"; // 에러발생
```
```plaintext
readonly gender: string; 의 경우 읽기 전용이기 때문에 값을 바꿀 수 없다.
readonly 를 지우면 값을 바꿀 수 있다.
```

## type alias vs interface

### function 표현
```ts
//type alias
type EatType = (food: string) => void;

//interface
interface IEat{
  (food: string): void;
}
```

### array 표현
```ts
//type alias
type PersonList = string[];

//interface
interface IPersonList {
  [index: number]: string;
}
```

### intersection 표현
```ts
interface ErrorHandling {
  success: boolean;
  error?: {message: string};
}
interface ArtistsData {
  atrists: {name: string}[];
}

//type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

//interface
interface IArtistsResponseType extends ArtistsData , ErrorHandling {}
```

### union types 표현
```ts
interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): viud;
  layEggs(): void;
}

type PetType = Bird | Fish;

interface IPet extends PetType {}
//type alias 로 만들어진 union 타입을 interface에 상속이 불가능하다.
class Pet implements PetType {}
//class 한테 implements로 넣어줄 수 없다.
```

### Declaration Merging - interface 
```ts
interface MergingInterface {
  a: string;
}
interface MergingInterface {
  b: string;
}

let mi: MergingInterface;
mi. a || b
```
```plaintext
type alias에는 없는 기능
interface를 보기와 같이 두군데에서 사용을 하더라도 MergingInterface를 사용하려고하면
합쳐지는걸 볼 수 있다.
```