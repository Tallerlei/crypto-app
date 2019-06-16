import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  /**
   * orders an array of objects by property value
   * @param array to be processed
   * @param property name of the property by which we order
   * @param ascending or not
   */
  orderArrayBy(array: any[], property: string, ascending: boolean = true) {
    return array.sort(compareValues());

    function compareValues() {
      return function (a, b) {
        if (!a.hasOwnProperty(property) || !b.hasOwnProperty(property)) {
          // property doesn't exist on either object
          return 0;
        }

        const varA = (typeof a[property] === 'string') ?
          a[property].toUpperCase() : a[property];
        const varB = (typeof b[property] === 'string') ?
          b[property].toUpperCase() : b[property];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return (
          ascending ? (comparison * -1) : comparison
        );
      };
    }
  }

}
