import { Injectable } from '@angular/core';
import { Jogo } from '../models/jogo.model';

@Injectable({ providedIn: 'root' })
export class JogoService {
  readonly categorias = ['Ação', 'Aventura', 'RPG', 'Esporte', 'Estratégia'];
  private jogos: Jogo[] = [
    { id: 1, nome: 'Minecraft', descricao: 'Explore um mundo de blocos, construa e sobreviva com seus amigos.', categoria: 'Aventura', preco: 99.90, avaliacao: 4.8, imagem: 'imagens/minecraft.jpg', disponivel: true },
    { id: 2, nome: 'Fortnite', descricao: 'Dispute partidas de ação e tente ser o último jogador na arena.', categoria: 'Ação', preco: 0, avaliacao: 4.3, imagem: 'imagens/fortnite.jpg', disponivel: true },
    { id: 3, nome: 'Stardew Valley', descricao: 'Cuide de uma fazenda, conheça os moradores e explore a cidade.', categoria: 'RPG', preco: 24.90, avaliacao: 4.9, imagem: 'imagens/stardew-valley.jpg', disponivel: true },
    { id: 4, nome: 'Rocket League', descricao: 'Jogue futebol com carros em partidas rápidas e competitivas.', categoria: 'Esporte', preco: 0, avaliacao: 4.5, imagem: 'imagens/rocket-league.jpg', disponivel: true },
    { id: 5, nome: 'Age of Empires II', descricao: 'Construa sua civilização e organize um exército em batalhas históricas.', categoria: 'Estratégia', preco: 59.90, avaliacao: 4.7, imagem: 'imagens/age-of-empires-ii.jpg', disponivel: true },
    { id: 6, nome: 'Hollow Knight', descricao: 'Explore um reino subterrâneo cheio de mistérios e desafios.', categoria: 'Aventura', preco: 46.99, avaliacao: 4.8, imagem: 'imagens/hollow-knight.jpg', disponivel: false },
    { id: 7, nome: 'Valorant', descricao: 'Trabalhe em equipe em um jogo de tiro com agentes e habilidades.', categoria: 'Ação', preco: 0, avaliacao: 4.2, imagem: 'imagens/valorant.jpg', disponivel: true },
    { id: 8, nome: 'The Witcher 3', descricao: 'Acompanhe Geralt em uma aventura com monstros, missões e escolhas.', categoria: 'RPG', preco: 79.90, avaliacao: 4.9, imagem: 'imagens/the-witcher-3.jpg', disponivel: false }
  ];

  listar(): Jogo[] { return [...this.jogos]; }
  buscarPorId(id: number): Jogo | undefined { return this.jogos.find(jogo => jogo.id === id); }
  adicionar(jogo: Omit<Jogo, 'id'>): void {
    if (!jogo.nome.trim() || !Number.isFinite(jogo.preco) || jogo.preco < 0 || !Number.isFinite(jogo.avaliacao) || jogo.avaliacao < 0 || jogo.avaliacao > 5) {
      throw new Error('Confira o nome, o preço e a avaliação.');
    }
    this.jogos.push({ ...jogo, nome: jogo.nome.trim(), id: Math.max(...this.jogos.map(item => item.id)) + 1 });
  }
  filtrarPorCategoria(categoria: string): Jogo[] { return this.jogos.filter(jogo => jogo.categoria === categoria); }
  buscarPorNome(nome: string): Jogo[] { return this.jogos.filter(jogo => jogo.nome.toLocaleLowerCase('pt-BR').includes(nome.trim().toLocaleLowerCase('pt-BR'))); }
  totalJogos(): number { return this.jogos.length; }
  totalGratuitos(): number { return this.jogos.filter(jogo => jogo.preco === 0).length; }
}
