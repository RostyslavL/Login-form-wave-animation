const lables = document.querySelectorAll('.form-controll label')

lables.forEach(lable =>{
    lable.innerHTML = lable.innerText
        .split('')
        .map((letter, index) => `<span style="transition-delay:${index * 100}ms">${letter}</span>`)
        .join('')
}) 