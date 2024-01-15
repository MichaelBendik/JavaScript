const out1 = document.getElementById("out1")
const out2 = document.getElementById("out2")
const out3 = document.getElementById("out3")
const loop1 = document.getElementById("loop1")
const loop2 = document.getElementById("loop2")
const loop3 = document.getElementById("loop3")
const details = document.getElementById("details")


//1.
let a = true

if(typeof a=='string'){
  out1.textContent = 'Тип переменной - строка'
}else if (typeof a=='number'){
  out1.textContent = 'Тип переменной - число'
}else out1.textContent = 'Тип переменной - логический'
// let month = prompt('В каком месяце вы родились?')

// switch (month) {
//   case '12':
//   case '1':
//   case '2':
//     alert('Вы родились зимой')
//     break;
//   case '3':
//   case '4':
//   case '5':
//     alert('Вы родились весной')
//     break;
//   case '6':
//   case '7':
//   case '8':
//     alert('Вы родились летом')
//     break;
//   case '9':
//   case '10':
//   case '11':
//     alert('Вы родились осенью')
//     break;

//   default:
//     alert('Неверный месяц')
//     break;
// }

//1 цикл
let resultL1 = ''
for(i=1;i<=40;i++){
resultL1 +=i+ "  "
}
loop1.textContent =resultL1
//2 цикл
let resultL2 = ''
let j=1
while(j<=40)
{resultL2 +=j+ "  "
j++}
loop2.textContent =resultL2
//3 цикл
let resultL3 = ''
let z=1
do{
  resultL3 +=z+ "  "
  z++
}while (z<=40)
loop3.textContent =resultL3

//setInterval(()=>{alert('РЕКЛАМА')},10000)

function openSpoiler1() {
  let anyNumber = prompt("Введите любое число больше 5:"); 
while (isNaN(anyNumber)||anyNumber<=5||anyNumber==null) {
  if (anyNumber==null){break};
  alert("Неверный ввод")
  anyNumber = prompt("Введите любое число больше 5:")
}


if(anyNumber)alert("Вы победили!");
}
let runOnce1=true
let runOnce2=true
details.addEventListener('click',()=>{
  if(runOnce1)
  openSpoiler1()
  runOnce1=false
})


let resEven =''

for(i=8;i<=20;i++){
  if(i%2==0){
  resEven+=i+ "  "}
}
out2.textContent = resEven

let resOdd =''

for(i=1;i<=7;i++){
  if(i%2==1&&i!=5){
  resOdd+=i+ "  "}
}
out3.textContent = resOdd








