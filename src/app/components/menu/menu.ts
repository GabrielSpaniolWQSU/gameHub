import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu', imports: [RouterLink, RouterLinkActive],
  template: `<header><nav class="container" aria-label="Menu principal">
    <a class="marca" routerLink="/">GameHub</a>
    <div class="links">
      <a routerLink="/" routerLinkActive="ativo" [routerLinkActiveOptions]="{exact: true}">Início</a>
      <a routerLink="/jogos" routerLinkActive="ativo">Jogos</a>
      <a routerLink="/cadastrar" routerLinkActive="ativo">Cadastrar</a>
      <a routerLink="/sobre" routerLinkActive="ativo">Sobre</a>
    </div>
  </nav></header>`
})
export class Menu {}
