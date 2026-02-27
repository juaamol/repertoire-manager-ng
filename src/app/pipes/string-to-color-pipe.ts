import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToColor',
})
export class StringToColorPipe implements PipeTransform {
  transform(str: string): string {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const h = Math.abs(hash) % 360;
    const s = 30;
    const l = 55;

    return `hsl(${h}, ${s}%, ${l}%)`;
  }
}
