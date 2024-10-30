import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgPipe'
})
export class ImgPipePipe implements PipeTransform {

  transform(url: string): string {
    return url.toLowerCase().replace("pokeapi.co/api/v2/pokemon", "raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon").replace(/\/$/, "") + ".png";
  }

}
