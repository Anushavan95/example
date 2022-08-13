// let parent = document.body.firstElementChild;
// let block = document.getElementById("block")
// let paraf = block.getElementsByTagName("div")
// // parent[2].style.border = "1px solid red"


let elem = document.getElementsByClassName('element')
// console.log(btn);
let btn = document.getElementById('btn')
let btnclass = document.getElementsByClassName('btn')
let item = document.querySelectorAll('.parent >div>span')



for (let i = 0; i < item.length; i++) {
    console.log(item[i].innerHTML);
    // parent[i].style.width = "35px"
    // parent[i].style.border = "1px solid red"

    
}

// firstElementChild
// firstChild
// nextElementSibling
// nextSibling

