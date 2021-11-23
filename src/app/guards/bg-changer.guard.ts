import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BgChangerGuard {
  
  resolve(route: ActivatedRouteSnapshot) {

    // Check if bgClass is provided and if it's valid
    if (
      !route.data ||
      route.data && !route.data.bgClass ||
      route.data && route.data.bgClass && !/-bg$/.test(route.data.bgClass)
    ) {
      console.error('bgClass is needed and has to be suffixed with "-bg".');
    };

    // Get classes, remove those suffixed with "-bg" and add the new one
    let classes = document.querySelector(".main-router-outlet-wrapper").classList;
    classes.forEach(c => {
      if (/-bg$/.test(c)) {
        classes.remove(c);
      }
    });
    classes.add(route.data.bgClass);
  }
  
}
