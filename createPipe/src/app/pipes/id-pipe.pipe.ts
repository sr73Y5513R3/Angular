import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idPipe'
})
export class IdPipePipe implements PipeTransform {

  transform(id: string): string {
    return id.padStart(4, '0');
  }
}
