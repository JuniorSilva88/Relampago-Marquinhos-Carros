// Função para exibir mais detalhes do carro
document.addEventListener('DOMContentLoaded', () => {
    const botoesDetalhes = document.querySelectorAll('.carro button');
    
    botoesDetalhes.forEach((botao) => {
        botao.addEventListener('click', () => {
            const nomeCarro = botao.parentElement.querySelector('h3').textContent;
            const precoCarro = botao.parentElement.querySelector('p:nth-of-type(2)').textContent;
            alert(`Você selecionou o ${nomeCarro}. \nPreço: ${precoCarro}`);
        });
    });
});
