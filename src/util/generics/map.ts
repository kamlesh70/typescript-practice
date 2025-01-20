/* 
* map function implementation with generics
*/

type Test<T extends number | string> = {
  [key: number]: string;
};

type Obj = {
  [key in number | string]: string;
}

type Student = {
  name: string;
  age: number;
}

type StudentKeyOf = keyof Student;

function getObjectPropertyValue(obj: Student, key: StudentKeyOf): any {
  return obj[key];
};

const object:Obj = {
  "test": "testing",
  0: "0"
}

function mapFunction<T, U>(arr: T[], callback: (element: T, index?: number) => U): U[] {
  const result = [];
  for (let i = 0; i < arr.length; i++) { 
    result.push(callback(arr[i]));
  }
  return result;
}

const arr = ['1', 2, 3, 4, 5];
const doubledArr = mapFunction<number | string, number|string>(arr, (num: number | string) => {
  if (typeof num === 'number') {
    return num * 2;
  }
  return num;
});
console.log(doubledArr)

