let list = document.getElementById('list');
let addItem = document.getElementById('add_item');
let remove = document.getElementById('remove');



addItem.addEventListener('click', function () {
    let liGenerate = createLiTag()
    list.appendChild(liGenerate)

})
remove.addEventListener('click', function () {
    list.lastElementChild.remove()
})


list.addEventListener('dblclick', function (event) {
    
    if (this.contains(event.target)) {
        let innerText = event.target.innerText
        event.target.innerHTML = ''

        let input = createInputBox(innerText)
        event.target.appendChild(input)

        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                event.target.innerHTML = e.target.value
            }
        })
    }
})

// Custom create elements
function createInputBox(value) {
    let input = document.createElement('input')
    input.type = 'text'
    input.style.fontSize = '23px'
    input.style.border = 'none'
    input.style.outline = 'none'
    input.style.color = '#84b6e4'
    input.style.placeholder = 'hi'
    input.value = value

    return input
}

function createLiTag() {
    let tagLi = document.createElement('li')
    tagLi.innerHTML = 'new'

    return tagLi
}
