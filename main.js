const inputElement = document.querySelector('#App input');
const buttonElement = document.querySelector('#App button');


function buttonSend() {
    return new Promise((resolve, reject) => {
        if (inputElement.value != '') {
            resolve('Requisição bem sucedida! ');
        } else {
            reject('Erro -- Requisição não concluida!! ');
        }
    })
}



buttonElement.onclick = () => {
    return buttonSend()
        .then((response) => {
            console.log(response + 'Seu nome de usuário é: ' + inputElement.value);
        })
        .catch((error) => {
            alert(error);
        });
};