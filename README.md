<h1 align="center" > Desafio Automação Web</h1>

<h2> Descrição do projeto</h2>
Esse desafio tem como objetivo acessar um grande portal de comércio online utilizando a ferramenta de automação web **cypress** e em conjunto **docker** e o **jenkins**. Foi realizado alguns cenários básico de teste e como arquitetura do projeto foi realizado a separação através de funcionalidade.


<h2>Requisitos:</h2>
<ul>
  <li>docker:https://www.docker.com/products/docker-desktop</li>
</ul>

<h2>Teste</h2>
<ul>
  <li>Para abrir o navegador: npm run cy:open</li>
  <li>Para executar em linha de comando: npm run cy:run</li>
</ul>


<h2>Report</h2>
<ul>
  <li>Para visualizar o relatório do que foi testado: cypress/reports/mochawesome.html</li>
</ul>

<h2>Docker</h2>
<h3>Local</h3>
<ul>
  <li>Build</li>
</ul>

> docker build -t cypress .
