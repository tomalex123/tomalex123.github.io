let menu = document.querySelector('#menu')

menu.style.cssText = `
    width: 100%;
    height: 60px;
    background-color: teal;
    display: flex;
    justify-content: start;
    align-items: center;
    box-shadow: 0 15px 25px -10px rgb(70, 66, 66);   
    
`

let menuList = document.querySelector('.menuList')

menuList.style.cssText = `
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-left: 50px
`

let listItems = document.querySelectorAll('li')

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.cssText = `
        list-style: none
    `
}

let links = document.querySelectorAll('a')

for (let i = 0; i < links.length; i++) {
    links[i].style.cssText = `
        color: blanchedalmond;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 3px;
        padding: 5px 10px;
        transition: 1s;    
    `
}

/** ********To Do Date and Time************** */

function displayDate() {
    let x = document.querySelector('#demo')
    x.innerHTML = Date()
}


function myFunction() {
    let a = document.getElementById("mySelect").value;
    let b = document.getElementById("demo1")
    b.innerHTML = "You selected: " + a;
}



/** ********To Do LIST************** */

function newElement() {

    let id = 1

    if (localStorage.getItem('id')) {
        id = +localStorage.getItem('id') + 1
    }

    localStorage.setItem(`username_${id}`, input.value);
    localStorage.setItem(`id`, id);

    showTitle()
}

function showTitle() {
    ol.innerHTML = ''

    let count = localStorage.getItem('id')

    for (let i = 1; i <= count; i++) {
        let username = localStorage.getItem(`username_${i}`)

        if (username) {
            ol.innerHTML += `
                    <li onclick='checkTask(this)'>${username} <span onclick='remove(${i})' class='close'>x<span></li> 
                `
        }
    }
}

function remove(id) {
    localStorage.removeItem(`username_${id}`)
    showTitle()
}

function checkTask(li) {
    li.classList.toggle('checked')
}

showTitle()