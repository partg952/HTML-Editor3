let button = document.getElementById('run')
let iframe = document.getElementById('running-platform')
let editor = document.getElementById('editor')
let clear = document.getElementById('clear')


clear.addEventListener('click' , ()=>{
    iframe.src = ""
})
button.addEventListener('click', () => {
    execute()
})
editor.addEventListener('change', () => {
    execute()
})
// editor.addEventListener('keyup' , ()=>{
//     execute()
// })

editor.addEventListener('paste', (e) => {
    e.preventDefault()
    let text = e.clipboardData.getData("text/plain")
    document.execCommand("insertText", false, text)
})

function execute() {
    console.log('clicked')
    if (editor.value.length != 0) {
        iframe.src = "data:text/html;charset=utf-8," + encodeURI(editor.value)
    }
}