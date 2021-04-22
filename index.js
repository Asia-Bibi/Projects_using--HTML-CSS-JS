const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A', '#9FE2BF', '#40E0D0', '#CCCCFF']

body.style.backgroundColor = '#6495ED'

button.addEventListener('click', changeB)

function changeB() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}