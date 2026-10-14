import { Component } from '@angular/core';

@Component({
  template: `<h1>Sobre o projeto</h1><section class="painel">
    <p>O GameHub é um catálogo de jogos desenvolvido como atividade de faculdade. É possível consultar, pesquisar e cadastrar jogos.</p>
    <p><strong>Aluno:</strong> Preencha seu nome</p><p><strong>Disciplina:</strong> Preencha o nome da disciplina</p>
    <h2>Tecnologias utilizadas</h2><p>Angular, TypeScript, HTML e CSS.</p>
    <h2>Organização</h2><p>Os componentes dividem a interface em partes, como o menu e os cartões de jogos.</p>
    <p>As rotas permitem navegar entre as páginas sem recarregar o site.</p>
    <p>O serviço guarda a lista de jogos e compartilha os dados entre as páginas por injeção de dependência.</p>
    <p>Os dados ficam apenas na memória. Ao atualizar a página, os cadastros feitos durante o uso são apagados.</p>
    <small>Preços e avaliações são exemplos para a atividade.</small>
  </section>`
})
export class Sobre {}
