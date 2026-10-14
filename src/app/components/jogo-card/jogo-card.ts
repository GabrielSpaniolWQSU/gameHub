import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Jogo } from '../../models/jogo.model';

@Component({
  selector: 'app-jogo-card', imports: [CurrencyPipe, RouterLink],
  templateUrl: './jogo-card.html'
})
export class JogoCard {
  @Input({ required: true }) jogo!: Jogo;
  imagemAlternativa(event: Event): void {
    const imagem = event.target as HTMLImageElement;
    imagem.onerror = null;
    imagem.src = 'imagens/padrao.svg';
  }
}
