/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а     

*/
const number= prompt("Введите число от 1 до 9",0)
if(number>0 && number<=9) {

    const numberOne= Number(number)
    const numberTwo= String(number)+ String(number)
    const numberThree = String(number)+ String(number) + String(number)

    console.log (numberOne + Number(numberTwo)+Number(numberThree))

}
else if(typeof number !== 'number'){
    console.log('Введите число')
}else{
console.log('Некорректное число')
}