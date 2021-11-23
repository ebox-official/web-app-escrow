import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplierFormatter'
})
export class MultiplierFormatterPipe implements PipeTransform {

  transform(value: number, res: number): unknown {

    if (value === undefined || value === null) {
      return "-";
    }

    res = res || 2;

    if (isNaN(value) || isNaN(res)) {
      return "Pipe could not convert.";
    }

    // Cast value to number
    value = Number(value);
    
    if (value === 0) {
      return "0";
    }

    let e = Math.floor(Math.log10(value));
    let m;
    if (e < -8) {
      m = "n";
      e = -9;
    }
    else if (e > -9 && e < -5) {
      m = "μ"
      e = -6;
    }
    else if (e > -6 && e < -2) {
      m = "m";
      e = -3;
    }
    else if (e > 2 && e < 6) {
      m = "K";
      e = 3;
    }
    else if (e > 5 && e < 9) {
      m = "M";
      e = 6;
    }
    else if (e > 8) {
      m = "B";
      e = 9;
    }

    let singleDigit;
    if (m) {
      singleDigit = value / 10**e;
    }
    else {
      singleDigit = value;
    }

    if (/\./.test(singleDigit+"")) {
      singleDigit = singleDigit.toFixed(res);
    }
    if (m) {
      singleDigit += m;
    }

    return singleDigit;
  }

}
