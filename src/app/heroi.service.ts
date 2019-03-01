import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/* conexão com a api da marvel  */
export class HeroiService {
  heroisUrl='https://gateway.marvel.com/v1/public/characters?ts=1&apikey=7fe7b7f87179fcc408098056dea4778c&hash=5dd81dc9f0938ae18e266e5fc05e83ff'
   
  constructor(private _httpService : HttpClient) {}
  //funcao responsavel por montar o url das imagens pos a api devolve a imagem por partes em uma lista.
  private montarUrls(cards: any[]){
    if(cards.length > 0){
      cards.forEach(card => {
        card.url = this.montarUrlImagem(card);
        card.detalhes = this.montarUrlDetalhes(card);
      });
    }
  }
  //faz a montagem para que possa acessar os quadrinhos do personagem.
  private montarUrlDetalhes(card: any) {
    if(card){
      let detalhes = card.urls.filter(valor => valor.type == 'detail');
      if(detalhes.length > 0){
        return detalhes[0].url;
      }
      return '';
    }
  }
// concatena   o url da imagem para que a imagem possa ser acessada
  private montarUrlImagem(card: any) {
    return card.thumbnail.path + '/portrait_fantastic.' + card.thumbnail.extension;
  }
// por fim faz a listagem do objeto de um tipo lista de forma assincrona.
  async listar() : Promise<any> {
    let result = await this._httpService.get<any>(`${this.heroisUrl}`).toPromise();
    this.montarUrls(result.data.results);
    return result.data.results;
  }
}
