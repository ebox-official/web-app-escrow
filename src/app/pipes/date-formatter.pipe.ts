import { Pipe, PipeTransform } from '@angular/core';
import { monthNames } from "../data/constants"
import { isNotNullOrUndefined } from '../utilities/utils';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  // Accept Date objects, 10-digits timestamps or 13-digits timestamps
  transform(value: any, ...args: unknown[]): string {

    if (!isNotNullOrUndefined(value)) {
      return "Invalid input. (DateFormatterPipe)";
    }
    
    let stringified = value.toString();

    let isJavascriptDate = value instanceof Date;
    let isInvalidDate = isJavascriptDate && (stringified === "Invalid Date");

    let isNumber = !isNaN(stringified);
    let isInvalidNumber = isNumber && (stringified.length < 10 || stringified.length > 13);
    
    if (isInvalidDate || isInvalidNumber) {
      return "Invalid input. (DateFormatterPipe)"
    }

    if (isJavascriptDate) {
      stringified = value.getTime().toString();
    }

    if (stringified.length === 10) {
      stringified = stringified + "000";
    }

    let d = new Date(parseInt(stringified));
    let hh = d.getHours().toString().padStart(2, "0");
    let mm = d.getMinutes().toString().padStart(2 , "0");
    let dd = d.getDate();
    let monthName = monthNames[d.getMonth()];
    let yyyy = d.getFullYear();

    return `${hh}:${mm} / ${monthName} ${dd} / ${yyyy}`;
  }

}
