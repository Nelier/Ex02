const inputElement = document.querySelector('#App input');
const buttonElement = document.querySelector('#App button');
const listElement = document.querySelector('#App ul');
var ReposArray = [];


function buttonSend() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', `https://api.github.com/users/${inputElement.value}/repos`);
        xhr.send(null);


        if (inputElement.value != null) {
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
            console.log(response);
            listElement.innerHTML = '';
            for (aux of response) {
                ReposArray.push(aux);
                var repoLi = document.createElement('li');
                var repoText = document.createTextNode('##NAME: ' + aux.name + ' ##DESCRIPTION: ' + aux.description + ' ##LINK: ' + aux.html_url);



                repoLi.appendChild(repoText);


                listElement.appendChild(repoLi);

            }
        })
        .catch((error) => {
            alert(error);
        });
};