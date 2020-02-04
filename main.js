const inputElement = document.querySelector('#App input');
const buttonElement = document.querySelector('#App button');


function buttonSend() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', `https://api.github.com/users/${inputElement.value}/repos`);
        xhr.send(null);


        if (inputElement.value != '') {
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject('Erro -- Requisição não concluida!! ');
                    }
                }
            }
        } else {
            reject('Erro -- Preencha o Espaço de usuário.');
        }
    })
}



buttonElement.onclick = () => {
    return buttonSend()
        .then((response) => {
            (response);
        })
        .catch((error) => {
            alert(error);
        });
};