/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'] ;
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasAll = myPizzasT1.concat (myPizzasT2)

const competitorPizzasLower = competitorPizzas.map(pizza => pizza.toLowerCase())
const myPizzasAllLower = myPizzasAll.map (pizza => pizza.toLowerCase())

let resultUnique = [];

for (let i = 0; i < myPizzasAllLower.length; i++){
 const pizza = myPizzasAllLower[i]
 if (!competitorPizzasLower.includes(pizza)){
  resultUnique.push(pizza)
 }
}

let resultNull =  resultUnique.lenth === 0 ? null: undefined ;


console.log(resultUnique); 
console.log(resultNull)

export { resultNull, resultUnique };
