import { Pipe, PipeTransform } from '@angular/core';
import { maskCurrency } from '../utilities/utils';

@Pipe({
  name: 'currencyFormatter'
})
export class CurrencyFormatterPipe implements PipeTransform {

  transform(value: string): unknown {
    return maskCurrency(value);
  }

}
