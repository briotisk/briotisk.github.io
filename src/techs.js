const techs = document.querySelectorAll(".tecnologias button");

const techTitle = document.getElementById("tech-title");
const techDescription = document.getElementById("tech-description");

for (let i = 0; i < techs.length; i++){

    let botao = techs[i];

    botao.addEventListener('click', () => {

        const textoBotao = botao.textContent;
        techTitle.textContent = `${textoBotao}`;

        switch(i){

            case 0:
                techDescription.textContent = `${textoBotao} é uma lnguagem de programação de nível médio, conhecida por sua eficiência e portabilidade. É amplamente utilizada em sistemas operacionais, desenvolvimento de jogos, sistemas embarcados e software de baixo nível.`;
            break;

            case 1:
                techDescription.textContent = `${textoBotao} é Uma linguagem de programação de alto nível, conhecida por sua sintaxe simples e legível. É amplamente utilizada em desenvolvimento web (Django, Flask), ciência de dados, automação, scripting, inteligência artificial e muitas outras áreas devido à sua grande quantidade de bibliotecas e comunidade ativa.`;
            break;
            
            case 2:
                techDescription.textContent = `${textoBotao} é uma linguagem de programação de alto nível, principalmente usada no desenvolvimento web para tornar as páginas web interativas e dinâmicas. É executado no lado do cliente nos navegadores da web e, cada vez mais, também é utilizado no desenvolvimento de aplicativos móveis (React Native, NativeScript), servidores (Node.js) e aplicativos de desktop.`;
            break;

            case 3:
                techDescription.textContent = `${textoBotao} é uma linguagem de programação de alto nível desenvolvida especificamente para escrever contratos inteligentes na plataforma Ethereum. Contratos inteligentes são programas autônomos que executam automaticamente quando determinadas condições são atendidas. Solidity é baseado em JavaScript e é usado para implementar lógica de negócios em aplicações descentralizadas (DApps) e blockchain.`;
            break;

            case 4:
                techDescription.textContent = `${textoBotao} é uma linguagem de baixo nível que representa instruções de máquina legíveis por humanos. Ela é usada para escrever programas que interagem diretamente com a arquitetura do processador e os recursos do sistema. O Assembly é essencial para desenvolvimento de sistemas embarcados, drivers de dispositivos, otimização de código e engenharia reversa.`;
            break;
        }

    });
}
/*

for (let i = 0; i < techs.length; i++){

    let botao = techs[i];

    botao.addEventListener('click', function() {
       
        divConteudo.textContent = 'Novo Conteúdo';

    });

}
*/