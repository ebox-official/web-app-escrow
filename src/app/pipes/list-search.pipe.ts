import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listSearch'
})
export class ListSearchPipe implements PipeTransform {

  transform(objectList: any[], search: any = ""): any[] {

    if (search === "" || search === undefined || search === null) {
      return objectList;
    }

    // The search can be a string
    if (typeof search === "string") {
      return objectList.filter(object => 
        JSON.stringify(object).
          toLowerCase().
          indexOf(search.toLowerCase()) > -1
      );
    }

    // Search can be an object
    if (typeof search === "object") {
      return objectList.filter(object => {
        for (let key in search) {

          // Search properties can be arrays
          if (Array.isArray(search[key])) {

            // Some means: if at least one of the filter matches
            let pass = search[key].some(v => this.compare(v, object[key]));
            if (!pass) return false;
          }
          // Search properties can also be objects or native values
          else if (search[key] !== undefined && search[key] !== null) {
            let pass = this.compare(search[key], object[key]);
            if (!pass) return false;
          }
        }
        return true;
      });
    }
    return objectList;
  }

  private compare(a, b) {
    if (typeof a === "object" && typeof b === "object")
      return this.shallowComparison(a, b);
    return a === b;
  }

  private shallowComparison(a, b) {
    for (let key in a)
      if (a.hasOwnProperty(key))
        if (a[key] !== b[key])
          return false;
    for (let key in b)
      if (b.hasOwnProperty(key))
        if (b[key] !== a[key])
          return false;
    return true;
  }

}


