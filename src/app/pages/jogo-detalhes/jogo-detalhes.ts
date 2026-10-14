import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { JogoService } from '../../services/jogo.service';

@Component({ imports: [RouterLink, CurrencyPipe], templateUrl: './jogo-detalhes.html' })
export class JogoDetalhes {
  private readonly route = inject(ActivatedRoute);
  private readonly parametros = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
  private readonly service = inject(JogoService);
  get jogo() { return this.service.buscarPorId(Number(this.parametros().get('id'))); }
  imagemAlternativa(event: Event): void {
    const imagem = event.target as HTMLImageElement;
    imagem.onerror = null;
    imagem.src = 'imagens/padrao.svg';
  }
}
