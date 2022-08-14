let adBtn = document.getElementById('add_item');
let removeBtn = document.getElementById('remove');
let list = document.getElementById('list');

list.addEventListener('dblclick', function (event) {
    if (this.contains(event.target)) {
        let innerText = event.target.innerText
        event.target.innerText = ''

        let input = createInput(innerText)
        event.target.appendChild(input)

        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                event.target.innerText =e.target.value
            }
        })
    }
})
adBtn.addEventListener('click', function () {
    let li = createLi()
    list.appendChild(li)
})
removeBtn.addEventListener('click', function () {
    list.lastElementChild.remove()
})



function createInput(value) {
    let input = document.createElement('input')
    input.type = 'text'
    input.value = value
    input.style.fontSize = '20px'
    return input
}
function createLi() {
    let tag = document.createElement('li');
    tag.innerHTML = 'new';
    
    return tag;
}