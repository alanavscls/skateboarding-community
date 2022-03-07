const botaoMenu = document.querySelector('.cabecalho__menu')   //para fazer esse menu lateral funcionar eu preciso pegar o botão e o menu lateral (no HTML)
//se formos olhar no HTML a class do "button" é exatamente ".cabecalho__menu". O próximo passo é pegar agora o menu lateral.
const menu = document.querySelector('.menu-lateral') 
//se formos olhar no HTML a class do menu lateral está no "nav" com esse mesmo nome.

//Mas, com isso que fizemos acima não movimentamos ainda a barra lateral para esquerda e direita. Então para isso vamos fazer mais uma classe no CSS para quando o Menu estiver ativo aparecer.

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})