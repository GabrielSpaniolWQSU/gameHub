import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JogoService } from '../../services/jogo.service';
import { JogoCard } from '../../components/jogo-card/jogo-card';

@Component({
  imports: [RouterLink, JogoCard],
  template: `<section class="apresentacao"><h1>Bem-vindo ao GameHub</h1>
    <p>Um catálogo simples para conhecer jogos e cadastrar seus favoritos.</p>
    <a class="botao" routerLink="/jogos">Ver catálogo</a>
  </section>
  <div class="indicadores"><p><strong>{{ service.totalJogos() }}</strong> jogos cadastrados</p><p><strong>{{ service.totalGratuitos() }}</strong> jogos gratuitos</p></div>
  <h2>Jogos em destaque</h2><div class="grade">@for (jogo of destaques; track jogo.id) { <app-jogo-card [jogo]="jogo" /> }</div>`
})
export class Home {
  readonly service = inject(JogoService);
  get destaques() { return this.service.listar().filter(jogo => jogo.avaliacao >= 4.8).slice(0, 3); }
}
