let $ = document
let inputUser = $.getElementsByTagName('input')[0]
let inputpass = $.getElementsByTagName('input')[1]
let eyeLeft = $.getElementsByTagName('img')[2]
let eyeright = $.getElementsByTagName('img')[3]

let paddingLeft = 0

inputUser.addEventListener('focus', () => {
    eyeLeft.style.top = '26%'
    eyeLeft.style.left = '24%'
    eyeright.style.top = '26%'
    eyeright.style.left = '55%'
})
inputUser.addEventListener('blur', () => {
    eyeLeft.style.top = '22%'
    eyeLeft.style.left = '28%'
    eyeright.style.top = '22%'
    eyeright.style.left = '58%'
    eyeLeft.style.paddingLeft = 0
    eyeright.style.paddingLeft = 0
})
inputUser.addEventListener('keyup', (event) => {
    
    eyeLeft.style.paddingLeft = paddingLeft + 'px'
    eyeright.style.paddingLeft = paddingLeft + 'px'

    if (event.keyCode === 8) {
        paddingLeft--
    } else {
        paddingLeft++
    }
    if (paddingLeft >= 32) {
        return false
       
    }
    

})

inputpass.addEventListener('focus', () => {
    eyeLeft.style.top = '19%'
    eyeLeft.style.left = '35%'
    eyeright.style.top = '19%'
    eyeright.style.left = '51%'
})
inputpass.addEventListener('blur', () => {
    eyeLeft.style.top = '22%'
    eyeLeft.style.left = '28%'
    eyeright.style.top = '22%'
    eyeright.style.left = '58%'
    eyeLeft.style.paddingLeft = 0
    eyeright.style.paddingLeft = 0
})


