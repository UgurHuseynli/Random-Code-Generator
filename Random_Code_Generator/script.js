const codeInput = document.querySelector('.code_input'),
    button = document.querySelector('.generateCode')


const generateCode = () => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length
    let code = "";
    for (let i = 0; i <= 8; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength)
        code += characters[randomIndex];
    }

    codeInput.innerHTML = code


}

button.addEventListener('click', generateCode)
