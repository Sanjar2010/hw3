const body = document.body
const h3 = document.createElement('h3')
h3.innerHTML ='Фамилия Имя:'
body.prepend(h3)


const input = document.createElement('input')
// input.setAttribute("placeholder","Ваше имя" )
input.setAttribute("class","input" )
h3.after(input)

input.style.background = "gray"

const h3b = document.createElement('h3')
h3b.innerHTML ='Введите номер заказа:'
input.after(h3b)


const input2 = document.createElement('input')
input2.setAttribute("placeholder","Оставьте сообщение здесь" )
input2.setAttribute("class","input" )
h3b.after(input2)



const h3c = document.createElement('h3')
h3c.innerHTML ='Телефон:'
input2.after(h3c)


const input3 = document.createElement('input')


h3c.after(input3)



const h3d = document.createElement('h3')
h3d.innerHTML ='"Электронный адрес:'
input3.after(h3d)


const input4 = document.createElement('input')
input4.setAttribute("placeholder","text@example.com" )
h3d.after(input4)


const btn = document.createElement('button')
btn.innerHTML ='Перейти к оплате'
btn.setAttribute("class","btn")
input4.after(btn)

btn.style.display = "block"
btn.style.marginTop = "20px"
btn.style.width ="200px"
btn.style.height ="50px"
btn.style.background = "#E36868"
btn.style.border = "none"

input.style.background = "#D1CBC7"
input.style.width = "400px"
input.style.height = "50px"
input.style.border = "none"


input2.style.background = "#D1CBC7"
input2.style.width = "400px"
input2.style.height = "50px"
input2.style.border = "none"



input3.style.background = "#D1CBC7"
input3.style.width = "400px"
input3.style.height = "50px"
input3.style.border = "none"


input4.style.background = "#D1CBC7"
input4.style.width = "400px"
input4.style.height = "50px"
input4.style.border = "none"









