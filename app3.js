
const item1 = document.getElementById("item1")
const item2 = document.getElementById("item2")
const item3 = document.getElementById("item3")
const first = document.getElementById("first")
const second = document.getElementById("second")
const total = document.getElementById("total")
const last = document.getElementById("last")
const nextLast = document.getElementById("nextLast")
const add = document.getElementById("add")
const date = document.getElementById("date")
const formattedDate = document.getElementById("formattedDate")
const multiply = document.getElementById("multiply")
const happy = document.getElementById("happy")
const userout = document.getElementById("userout")
const main = document.getElementById("main")
const footer = document.getElementById("footer")

const userinfo = document.getElementById("userinfo")
const dateout = document.getElementById("dateout")




userout.classList.add('hide')
userinfo.textContent=`Пользователь: ${localStorage.getItem('userID')}`
dateout.textContent=`Сегодня: ${outDate()}`
//happy.classList.remove('hide')







let arr1 = [1,2,3,4,5]
let arr2 = new Array(1,2,3,4,5)
let arr3=[]
arr3[0]=1
arr3[1]=2
arr3[2]=3
arr3[3]=4
arr3[4]=5

let allArr3


item1.textContent=arr3[4].toString()
arr3[4]=10
for (let i=0;i<arr3.length;i++)
{item3.textContent+=arr3[i]+' '
allArr3 = item3.textContent}

item2.textContent=arr3[4].toString()


item3.addEventListener('mouseover', function() {
  item3.textContent=` Длина массива - ${arr3.length}`
})
item3.addEventListener('mouseout', function() {
  item3.textContent=allArr3
})

let firstArray =['Каждый ', 'охотник ','желает ','знать, ']
let secondArray =['где ', 'сидит ','фазан.']
let totalArray = firstArray.concat(secondArray)

first.textContent = firstArray.join('')
second.textContent = secondArray.join('')
total.textContent = totalArray.join('')
last.textContent = totalArray.pop()
nextLast.textContent = totalArray.pop()

totalArray.unshift('Фраза - ')
add.textContent = totalArray.join('')

date.textContent= new Date ();
formattedDate.textContent = outDate()


function outDate()
{
  let year = new Date ().getFullYear()

  let month
  switch (new Date ().getMonth()) {
    case 0: month = 'января'; break;
    case 1: month = 'февраля'; break;
    case 2: month = 'марта'; break;
    case 3: month = 'апреля'; break;
    case 4: month = 'мая'; break;
    case 5: month = 'июня'; break;
    case 6: month = 'июля'; break;
    case 7: month = 'августа'; break;
    case 8: month = 'сентября'; break;
    case 9: month = 'октября'; break;
    case 10: month = 'ноября'; break;
    case 11: month = 'декабря'; break;

  }
  let day = new Date ().getDate()
  return `${day} ${month} ${year} года`

}
function multiplyRandomInt() {
  multiply.textContent=Math.floor(Math.random() * 51)*Math.floor(Math.random() * 51)
}
multiplyRandomInt()

happy.addEventListener('click',()=>{
  happy.classList.add('hide')
  userout.classList.remove('hide')
  userout.classList.add('flex')
  
  main.classList.add('hide')
  
})

userout.addEventListener('click',()=>{
  userout.classList.add('hide')
  userout.classList.remove('flex')
  main.classList.remove('hide')
  happy.classList.remove('hide')
  
})


