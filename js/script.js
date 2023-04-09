// 1 task
// let result = '';
// for (let i = 10; i<=20; i++) {
//     result += i + (i == 20 ? '': ',')
// }
// console.log (result);
//
// 2 task
// let result = '';
// for (let i = 10; i<=20; i++) {
//     result += i**2 + (i == 20 ? '': ',')
//  }
// console.log (result);
// 
// 3 task
// let result = '';
// for (let i = 1; i<=10; i++) {
//     result += `7 * ${i} = ${7*i}\n`
//   }
// console.log (result);
//
// 4 task
// let result = '';
// for (let i = 1; i<=15; i++) {
//     result = (result++) + i 
//   }
// console.log (result);
// 
// 5 task 
// let result = 0;
// for (let i = 15; i<=35; i++) {
//  if (result==0) {
//     result++;   
//  }
//     result *= i;
// }
// console.log (result);
// 
// 6 task 
// let result = 0;
// for (let i=1;i<=500;i++) {
//     result += (+i);
//     if (i==500) {
//         result/=i;
//     }
// }
// console.log (result);
// 
// 7task
// let result = 0;
// let i=30;
// while (i<=80) {
//     if (i%2==0) {
//         result+=(+i)
//     }
//     i++
// }
// console.log(result);
// 
// 8 task
// let result = '';
// for (let i = 100; i<=200; i++) {
//     if (i%3==0) {
//         result += `${i} `    
//     }
//     }
// console.log (result);
// 
// 9 task
let natNum=(prompt('Enter natural number'))
let result = '';
for (let i =1; i<=natNum; i++) {
    if (natNum%i==0) {
        result +=`${i} `
    }
}
console.log (result);
