function keyHasBeenPresed(){
    console.log('key pressed')
    let textAreaContent = document.querySelector('textarea');
    let charCount = document.querySelector('.charCount')

    let charLimit = 200;
    charCount.innerHTML = String(textAreaContent.value).length;
    let charLimitElement = document.querySelector('.charLimit')

    charLimitElement.innerHTML = charLimit - textAreaContent.value.length;

    let wordCount = document.querySelector('.wordCount');
    let wordsArray = String(textAreaContent.value).split(' ');
    wordCount.innerHTML = wordsArray.length

    if(textAreaContent.value.length >20){
    
        textAreaContent.value = String(textAreaContent.value.substring(0, charLimit))
    }
}

document.querySelector('.clearButton').addEventListener('click', ()=>{
    document.querySelector('textarea').value = '';
})
