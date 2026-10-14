import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JogoService } from '../../services/jogo.service';
import { Jogo } from '../../models/jogo.model';

@Component({ imports: [FormsModule], templateUrl: './cadastrar-jogo.html' })
export class CadastrarJogo {
  readonly service = inject(JogoService);
  private readonly router = inject(Router);
  erro = '';
  jogo: Omit<Jogo, 'id'> = { nome: '', descricao: '', categoria: 'Ação', preco: 0, avaliacao: 0, imagem: '', disponivel: true };
  salvar(form: NgForm): void {
    this.erro = '';
    if (form.invalid) { form.control.markAllAsTouched(); return; }
    try {
      this.service.adicionar({ ...this.jogo, imagem: this.jogo.imagem.trim() || 'imagens/padrao.svg' });
      this.router.navigate(['/jogos']);
    } catch (erro) { this.erro = erro instanceof Error ? erro.message : 'Não foi possível cadastrar.'; }
  }
}
