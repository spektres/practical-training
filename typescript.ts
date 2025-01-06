// Пример сравнения JavaScript и TypeScript



function sum1(a: number, b: number): number {
    return a + b;
}
console.log(sum1(5, 10));  // Ошибка на этапе компиляции

function identity<T>(arg: T): T {
    return arg;
  }
  
  console.log(identity<string>("Hello")); // Тип строки
  console.log(identity<number>(42));      // Тип числа
  

