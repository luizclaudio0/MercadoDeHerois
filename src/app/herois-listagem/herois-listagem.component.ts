import { Component, OnInit } from '@angular/core';
import { HeroiService } from '../heroi.service';
/* Component é responsavel por enviar e os arquivos para que possam ser acessados por outras paginas.
e faz a conexão*/
@Component({
  selector: 'app-herois-listagem',
  templateUrl: './herois-listagem.component.html',
  styleUrls: ['./herois-listagem.component.css']
})
//Classe responsável para 
export class HeroisListagemComponent implements OnInit {
  herois: any;
  constructor(private heroiService: HeroiService) { }
//Responsável pela inicialização do projeto.
  ngOnInit() {
    this.listar();
  }
/*async passa para funçao de movimento  assincrono para que não ocorra error na hora da listagem ou atraso de
 conexão com a api.*/
  async listar(){
    let response = await this.heroiService.listar();
    this.herois = response;
  }
//Essa função é reponsável por abrir o link do heroi em uma nova aba do navegador.
  acessarQuadrinhos(url: string){
    window.open(url, "_blank");
  }
}
