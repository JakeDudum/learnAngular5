import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {
    if (!pipeModifier) return pipeData;
    return pipeData.filter(eachItem => {
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }
}