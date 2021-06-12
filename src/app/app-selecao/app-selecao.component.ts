import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-selecao',
  templateUrl: './app-selecao.component.html',
  styleUrls: ['./app-selecao.component.css']
})
export class AppSelecaoComponent {

  @Input()
  titulo: string="";

  @Input()
  opcoes: string[] = [];

  @Input()
  escolhaAte: number = 1;

  opcoesSelecionadas: string[] = [];

  seleciona(opcao: string){
    const idx = this.opcoesSelecionadas.indexOf(opcao);
    if (this.escolhaAte === 1){
      this.opcoesSelecionadas = [opcao];
    } else {
      if (idx === -1){
        this.opcoesSelecionadas.push(opcao);
      } else {
        this.opcoesSelecionadas.splice(idx, 1);
      }
    }
  }

  estaDesabilitado(opcao: string) : boolean {
    const idx = this.opcoesSelecionadas.indexOf(opcao);
    return this.escolhaAte > 1 && 
    idx === -1 && 
    this.opcoesSelecionadas.length >= this.escolhaAte;
  }

}
