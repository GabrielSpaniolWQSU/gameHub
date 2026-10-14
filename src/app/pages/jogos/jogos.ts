import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JogoService } from '../../services/jogo.service';
import { JogoCard } from '../../components/jogo-card/jogo-card';

@Component({ imports: [FormsModule, JogoCard], templateUrl: './jogos.html' })
export class Jogos {
  readonly service = inject(JogoService);
  busca = '';
  categoria = '';
  get jogosFiltrados() {
    const jogos = this.busca.trim() ? this.service.buscarPorNome(this.busca) : this.service.listar();
    if (!this.categoria) return jogos;
    const ids = new Set(this.service.filtrarPorCategoria(this.categoria).map(jogo => jogo.id));
    return jogos.filter(jogo => ids.has(jogo.id));
  }
  limpar(): void { this.busca = ''; this.categoria = ''; }
}
