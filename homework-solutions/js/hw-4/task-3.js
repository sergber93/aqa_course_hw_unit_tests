/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
let minAge, maxAge, age
minAge = 18
maxAge = 60
age = "2"
age = parseInt(age)
if (isNaN (age)) {
  console.log ("Incorrect data type")
} if ( age < minAge )
  {
    console.log(`You don't have access cause your age is ${age} It's less then`)
}
else if (age >=minAge && age <= maxAge) {
console.log ("Welcome")
}
else if (age > maxAge) {
  console.log("Keep calm and look culture channel")
}
else {
  console.log ("Technical work")