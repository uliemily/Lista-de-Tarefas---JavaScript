
const btnadiciona = document.querySelector('input');

btnadiciona.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && btnadiciona.value != '') {
        criaLista();
    }

});

function criaLista() {
    let criaElementos = document.querySelector('input');


    if (criaElementos.value != '') {
        let container = document.querySelector('.container');
        let itens = document.createElement('li');
        let lista = document.createTextNode(criaElementos.value);
        itens.insertAdjacentHTML('afterbegin', '');


        itens.appendChild(lista);
        container.appendChild(itens);

        //#####################################################################################################################

        const button = document.createElement('button');
        const deleta = document.createTextNode('Deletar');

        button.appendChild(deleta);
        container.appendChild(button);

        button.addEventListener('click', removeItens)


        function removeItens() {
            itens.remove()
            button.remove()

        }
        criaElementos = document.querySelector('input').value = '';

        let btnApagaTudo = document.querySelector('.apagar');

        btnApagaTudo.onclick = function apagarTudo() {
            container.innerHTML = '';
        }
    } else { }
}















/*

*/