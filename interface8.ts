interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: "dong",
  gender: "male",
}
// p81.gender = "female";
//readonly gender: string; 의 경우 읽기 전용이기 때문에 값을 바꿀 수 없다.
//readonly 를 지우면 값을 바꿀 수 있다.